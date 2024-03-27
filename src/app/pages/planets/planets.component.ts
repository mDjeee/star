import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPlanets } from '../../store/planets/planets.actions';
import { planetsSelector } from '../../store/planets/planets.selector';
import { SharedModule } from '../../shared/shared.module';
import { NgForOf, NgIf } from '@angular/common';
import { map, Observable, of } from 'rxjs';
import { state } from '@angular/animations';

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
export class PlanetsComponent implements OnInit {
  planets$: Observable<any> = of([]);
  next$: Observable<string | null> = of(null);
  previous$: Observable<string | null> = of(null);
  loading$: Observable<boolean | null> = of(false);
  count$: Observable<number> = of(0);

  constructor(private store: Store) { }

  loadInitialData(page: any = 1) {
    this.loading$ = of(true);
    this.store.dispatch(loadPlanets({ loading: true, page }));
  }

  pageChanged(page: any) {
    this.loadInitialData(page);
  }

  ngOnInit(): void {
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
}
