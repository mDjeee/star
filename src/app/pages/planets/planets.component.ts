import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPlanets } from '../../store/planets/planets.actions';
import { planetsSelector } from '../../store/planets/planets.selector';
import { SharedModule } from '../../shared/shared.module';
import { NgForOf, NgIf } from '@angular/common';

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
  planets: any = [];
  next: string | null = null;
  previous: string | null = null;
  loading: boolean = false;
  count: number = 0;
  pages: number[] = [];

  constructor(
    private store: Store,
    ) {
  }

  loadInitialData(page: any) {
    this.store.dispatch(loadPlanets({ loading: true, page }));
    this.store.select(planetsSelector).subscribe(state => {
      this.planets = state.planets;
      this.count = state.count;
      this.next = state.next;
      this.previous = state.previous;
      this.loading = state.loading;
      this.pages = Array(Math.ceil(this.count/10)).fill(1);
    })
  }

  pageChanged(page: any) {
    this.loadInitialData(page);
  }
}
