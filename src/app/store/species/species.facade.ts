import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSpecies } from './species.actions';
import { speciesSelector } from './species.selector';


@Injectable({
  providedIn: 'root'
})
export class SpeciesFacade {
  constructor(private store: Store) { }

  public species$ = this.store.select(speciesSelector);

  fetchSpecies(page: number = 1) {
    this.store.dispatch(loadSpecies({ loading: true, page }));
  }
}
