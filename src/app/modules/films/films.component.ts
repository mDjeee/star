import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgForOf, NgIf } from '@angular/common';
import { FilmsFacade } from '../../store/films/films.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [
    SharedModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit {
  constructor(public filmsFacade: FilmsFacade, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const currentPage = parseInt(params['page'], 10) || 1;
      this.filmsFacade.fetchFilms(currentPage);
    })
  }

  pageChanged(page: number) {
    this.filmsFacade.fetchFilms(page);
  }
}
