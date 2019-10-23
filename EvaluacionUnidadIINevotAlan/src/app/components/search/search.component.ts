import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  heroes: any = [];

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.getFoundHeroes(params['name']);
    })
  }

}
