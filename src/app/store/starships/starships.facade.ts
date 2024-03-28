import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadStarships } from './starships.actions';
import { starshipsSelector } from './starships.selector';


@Injectable({
  providedIn: 'root'
})
export class StarshipsFacade {
  constructor(private store: Store) { }

  public starships$ = this.store.select(starshipsSelector);

  fetchStarships(page: number = 1) {
    this.store.dispatch(loadStarships({ loading: true, page }));
  }
}
