import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPlanets } from '../../store/planets/planets.actions';
import { planetsSelector } from '../../store/planets/planets.selector';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit {
  planets: any = [];
  constructor(private store: Store) {
  }

  loadInitialData() {
    this.store.dispatch(loadPlanets({ loading: true }));
    this.store.select(planetsSelector).subscribe(state => {
      this.planets = state.planets;
      console.log(state)
    })
  }

  ngOnInit(): void {
    this.loadInitialData();
  }


}
