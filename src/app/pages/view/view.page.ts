import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpPokeService } from 'src/app/service/httpPoke.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  index: any;
  pokemonArray: Array<any> = new Array();

  constructor(
    private service: HttpPokeService, 
    private activeRoute: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.index = params.get('index')
    });

    if(this.index == null) {
      this.router.navigate(['/home']);
    }

    this.listing();
  }

  listing() {
    this.service.listingPokemon(this.index).subscribe(pokemon => {
      this.pokemonArray.push(pokemon);
    })
  }
}
