import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadStarships, loadStarshipsFail, loadStarshipsSuccess } from './starships.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { StarshipsService } from '../../core/services/starships.service';
import { IStarshipsResponse } from '../../shared/interfaces/starships.interface';
import { AlertService } from '../../core/services/alert.service';
import { AlertType } from '../../shared/enums/alert.enum';


@Injectable()
export class StarshipsEffects {
  constructor(
    private action$: Actions,
    private starshipsService: StarshipsService,
    private toastService: AlertService,
    ) {
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
          catchError((err) => {
            this.toastService.setAlert({
              type: AlertType.danger,
              text: err.message
            })
            return of(loadStarshipsFail({ error: err.message, loading: false }));
          })
        )
      })
    )
  )
}
