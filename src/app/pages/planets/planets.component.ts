import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPlanets } from '../../store/planets/planets.actions';
import { planetsSelector } from '../../store/planets/planets.selector';
import { SharedModule } from '../../shared/shared.module';
import { NgForOf, NgIf } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [
    SharedModule,
    NgIf,
    NgForOf,
  ],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {
  planets$: Observable<any>;
  next$: Observable<string | null>;
  previous$: Observable<string | null>;
  loading$: Observable<boolean | null>;
  count$: Observable<number>;

  constructor(private store: Store) {
    this.planets$ = this.store.select(planetsSelector).pipe(
      map(state => state.planets)
    );
    this.next$ = this.store.select(planetsSelector).pipe(
      map(state => state.next)
    );
    this.previous$ = this.store.select(planetsSelector).pipe(
      map(state => state.previous)
    );
    this.loading$ = this.store.select(planetsSelector).pipe(
      map(state => state.loading)
    );
    this.count$ = this.store.select(planetsSelector).pipe(
      map(state => state.count),
    );
  }

  loadInitialData(page: any = 1) {
    this.store.dispatch(loadPlanets({ loading: true, page }));
  }

  pageChanged(page: any) {
    this.loadInitialData(page);
  }
}
