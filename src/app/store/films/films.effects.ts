import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadFilms, loadFilmsFail, loadFilmsSuccess } from './films.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { IFilmResponse } from '../../shared/interfaces/films.interface';
import { FilmsService } from '../../core/services/films.service';


@Injectable()
export class FilmsEffects {
  constructor(private action$: Actions, private filmsService: FilmsService) {
  }

  loadFilms$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadFilms),
      exhaustMap((action) => {
        return this.filmsService.getFilms(action.page).pipe(
          map((data: IFilmResponse) => loadFilmsSuccess({
            count: data.count,
            next: data.next,
            previous: data.previous,
            films: data.results,
            loading: false,
          })),
          catchError((err) => of(loadFilmsFail({ error: err.message, loading: false })))
        )
      })
    )
  )
}
