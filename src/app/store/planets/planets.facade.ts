import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPlanets } from './planets.actions';
import { planetsSelector } from './planets.selector';


@Injectable({
  providedIn: 'root'
})
export class PlanetsFacade {
  constructor(private store: Store) { }

  public planets$ = this.store.select(planetsSelector);

  fetchPlanets(page: number = 1) {
    this.store.dispatch(loadPlanets({ loading: true, page }));
  }
}
