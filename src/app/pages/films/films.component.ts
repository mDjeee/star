import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NgForOf, NgIf } from '@angular/common';
import { FilmsFacade } from '../../store/films/films.facade';

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
  constructor(public filmsFacade: FilmsFacade) { }

  ngOnInit() {
    this.filmsFacade.fetchFilms(1);
  }

  pageChanged(page: number) {
    this.filmsFacade.fetchFilms(page);
  }
}
