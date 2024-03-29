import { Component, OnInit } from '@angular/core';
import { StarshipsFacade } from '../../store/starships/starships.facade';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';

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
export class StarshipsComponent implements OnInit {

  constructor(public starshipsFacade: StarshipsFacade, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const currentPage = parseInt(params['page'], 10) || 1;
      this.starshipsFacade.fetchStarships(currentPage);
    })
  }

  pageChanged(page: number) {
    this.starshipsFacade.fetchStarships(page);
  }

}
