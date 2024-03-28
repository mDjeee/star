import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgForOf, NgIf } from '@angular/common';
import { PlanetsFacade } from '../../store/planets/planets.facade';
import { ActivatedRoute } from '@angular/router';

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
  constructor(public planetsFacade: PlanetsFacade, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const currentPage = parseInt(params['page'], 10) || 1;
      this.planetsFacade.fetchPlanets(currentPage);
    })
  }

  pageChanged(page: number) {
    this.planetsFacade.fetchPlanets(page);
  }
}
