import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { NgForOf, NgIf } from '@angular/common';
import { PlanetsFacade } from '../../store/planets/planets.facade';

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
  constructor(public planetsFacade: PlanetsFacade) { }

  ngOnInit() {
    this.planetsFacade.fetchPlanets(1);
  }

  pageChanged(page: number) {
    this.planetsFacade.fetchPlanets(page);
  }
}
