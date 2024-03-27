import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadFilms } from './films.actions';
import { filmsSelector } from './films.selector';


@Injectable({
  providedIn: 'root'
})
export class FilmsFacade {
  constructor(private store: Store) { }

  public films$ = this.store.select(filmsSelector);

  fetchFilms(page: number = 1) {
    this.store.dispatch(loadFilms({ loading: true, page }));
  }
}
