import { Component } from '@angular/core';
import { SpeciesFacade } from '../../store/species/species.facade';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

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
export class SpeciesComponent {

  constructor(public speciesFacade: SpeciesFacade) { }

  ngOnInit() {
    this.speciesFacade.fetchSpecies(1);
  }

  pageChanged(page: number) {
    this.speciesFacade.fetchSpecies(page);
  }
}
