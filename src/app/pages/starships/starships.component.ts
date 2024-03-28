import { Component } from '@angular/core';
import { StarshipsFacade } from '../../store/starships/starships.facade';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    SharedModule
  ],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent {

  constructor(public starsgipsFacade: StarshipsFacade) { }

  ngOnInit() {
    this.starsgipsFacade.fetchStarships(1);
  }

  pageChanged(page: number) {
    this.starsgipsFacade.fetchStarships(page);
  }

}
