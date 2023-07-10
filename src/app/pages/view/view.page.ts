import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpPokeService } from './../../../app/service/httpPoke.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  index: any;
  pokemonArray: Array<any> = new Array();

  constructor(private service: HttpPokeService, private router: Router) { }

  ngOnInit(): void {
    this.index = history.state.index;

    if (this.index === null || this.index === undefined) {
      this.router.navigate(['home']);
    }

    this.listing(this.index);
  }

  listing(index: number) {
    this.service.listingPokemon(index).subscribe(pokemon => {
      this.pokemonArray = this.pokemonArray.slice(0, -1);
      this.pokemonArray.push(pokemon);
    })
  }
}
