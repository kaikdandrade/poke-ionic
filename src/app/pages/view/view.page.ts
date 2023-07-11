import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpPokeService } from 'src/app/service/httpPoke.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  private index = 0;
  public pokemonArray = new Array();

  constructor(private service: HttpPokeService, private router: Router) { }

  ngOnInit(): void {
    this.index = (history.state.index === undefined) ? 0 : history.state.index;
    console.log(history.state.index, this.index);

    if (this.index == 0) this.router.navigate(['home']);

    this.listing(this.index);
  }

  listing(index: number) {
    this.service.listingPokemon(index).subscribe(pokemon => {
      this.pokemonArray = [];
      this.pokemonArray.push(pokemon);
    })
  }
}
