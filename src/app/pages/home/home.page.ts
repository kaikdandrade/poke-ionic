import { Component, OnInit } from '@angular/core';
import { HttpPokeService } from './../../service/httpPoke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  search: string = "";
  searchFound: boolean = true;
  pokemonArray: Array<any> = new Array();

  constructor(private service: HttpPokeService, private router: Router) { }

  ngOnInit(): void {
    this.listingPoke()
  }

  handleClick(index: number) {
    this.router.navigate(['view'], { state: { index } });
  }

  searchPoke() {
    this.service.listingSearch(this.search).subscribe(pokemon => {
      if (this.search === "") {
        this.listingPoke();
        return;
      }

      this.searchFound = true;
      this.pokemonArray = [];
      this.pokemonArray.push(pokemon)
    }, () => { this.searchFound = false })
  }

  listingPoke() {
    this.service.listing().subscribe(pokemon => {
      this.searchFound = true;
      this.service.next = pokemon.next;
      this.pokemonArray = [];
      for (let i = 0; i < pokemon.results.length; i++) {
        this.getDetails(pokemon.results[i].url)
      }
    })
  }

  moreListingPoke() {
    this.service.moreListing().subscribe(pokemon => {
      this.service.next = pokemon.next;
      for (let i = 0; i < pokemon.results.length; i++) {
        this.getDetails(pokemon.results[i].url)
      }
    })
  }

  getDetails(url: any) {
    this.service.getPokemon(url).subscribe(pokemon => {
      this.pokemonArray.push(pokemon)
    })
  }
}
