import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadStarships, loadStarshipsFail, loadStarshipsSuccess } from './starships.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { StarshipsService } from '../../core/services/starships.service';
import { IStarshipsResponse } from '../../shared/interfaces/starships.interface';


@Injectable()
export class StarshipsEffects {
  constructor(private action$: Actions, private starshipsService: StarshipsService) {
  }

  loadStarships$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadStarships),
      exhaustMap((action) => {
        return this.starshipsService.getStarships(action.page).pipe(
          map((data: IStarshipsResponse) => loadStarshipsSuccess({
            count: data.count,
            next: data.next,
            previous: data.previous,
            starships: data.results,
            loading: false,
          })),
          catchError((err) => of(loadStarshipsFail({ error: err.message, loading: false })))
        )
      })
    )
  )
}
