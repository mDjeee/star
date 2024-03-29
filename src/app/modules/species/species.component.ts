import { Component, OnInit } from '@angular/core';
import { SpeciesFacade } from '../../store/species/species.facade';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    SharedModule
  ],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent implements OnInit {

  constructor(public speciesFacade: SpeciesFacade, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const currentPage = parseInt(params['page'], 10) || 1;
      this.speciesFacade.fetchSpecies(currentPage);
    })
  }

  pageChanged(page: number) {
    this.speciesFacade.fetchSpecies(page);
  }
}
