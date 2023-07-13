import { Component, OnInit } from '@angular/core';
import { HttpPokeService } from 'src/app/service/httpPoke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public searchValue = "";   // GUarda o valor digitdo no input search
  public searching = false; // Se isso for verdadeiro muda a tela para a condiguração de pesquisa
  public notFound = false;  // Se for verdadeiro exibe a imagem de pokémon não encontrado
  public loading = false;   // Se isso for verdadeiro exibe a tela de carregamento
  public pokemonArray: Array<any> = new Array();

  constructor(private service: HttpPokeService, private router: Router) { }

  ngOnInit(): void {
    this.listingPoke()
  }

  handleClick(index: number) {
    this.router.navigate(['view'], { state: { index } })
  }

  searchClean() {
    this.searchValue = "";
    this.notFound = false;
    this.searching = false;
    this.listingPoke()
  }

  async searchPoke() {
    if (this.searchValue === "") {
      this.searchClean();
      return
    }

    this.loading = true;
    this.searchValue = this.searchValue.toLowerCase();
    try {
      const pokemon = await new Promise((resolve, reject) => {
        this.service.listingSearch(this.searchValue).subscribe(
          (pokemon) => {
            resolve(pokemon)
          },
          (error) => {
            reject(error)
          }
        )
      });

      this.notFound = false;
      this.searching = true;
      this.pokemonArray = [];
      this.pokemonArray.push(pokemon)

    } catch (error) {
      this.notFound = true
    }

    this.loading = false
  }

  async listingPoke() {
    await new Promise((resolve, reject) => {
      this.service.listing().subscribe(
        (pokemon) => {
          this.service.next = pokemon.next;
          this.pokemonArray = [];
          for (let i = 0; i < pokemon.results.length; i++) {
            this.getDetails(pokemon.results[i].url)
          }
          resolve(null)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  async moreListingPoke() {
    this.loading = true;
    await new Promise((resolve, reject) => {
      this.service.moreListing().subscribe(
        (pokemon) => {
          this.service.next = pokemon.next;
          for (let i = 0; i < pokemon.results.length; i++) {
            this.getDetails(pokemon.results[i].url)
          }
          resolve(null)
        },
        (error) => {
          reject(error)
        }
      )
    });

    this.loading = false
  }


  async getDetails(url: any) {
    await new Promise(() => {
      this.service.getPokemon(url).subscribe(
        (pokemon) => {
          this.pokemonArray.push(pokemon)
        }
      )
    })
  }
}
