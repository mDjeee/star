import { Observable, of } from 'rxjs';
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


// planets$: Observable<any> = of([]);
// next$: Observable<string | null> = of(null);
// previous$: Observable<string | null> = of(null);
// loading$: Observable<boolean | null> = of(false);
// count$: Observable<number> = of(0);
