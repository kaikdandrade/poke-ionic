import { Component, OnInit, inject } from '@angular/core';
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

  private service: HttpPokeService = inject(HttpPokeService);
  private router: Router = inject(Router);

  ngOnInit(): void {
    if (history.state.index === undefined) this.router.navigate(['home']);

    this.index = history.state.index;
    this.listing(this.index);
  }

  listing(index: number) {
    this.service.listingPokemon(index).subscribe(pokemon => {
      this.pokemonArray = [];
      this.pokemonArray.push(pokemon);
    })
  }
}
