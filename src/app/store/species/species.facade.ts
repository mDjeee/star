import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPlanets } from './species.actions';
import { speciesSelector } from './species.selector';


@Injectable({
  providedIn: 'root'
})
export class SpeciesFacade {
  constructor(private store: Store) { }

  public planets$ = this.store.select(speciesSelector);

  fetchPlanets(page: number = 1) {
    this.store.dispatch(loadPlanets({ loading: true, page }));
  }
}
