import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadPlanets, loadPlanetsFail, loadPlanetsSuccess } from './planets.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { PlanetsService } from '../../core/services/planets.service';
import { IPlanetResponse } from '../../shared/interfaces/planets.interface';
import { AlertService } from '../../core/services/alert.service';
import { AlertType } from '../../shared/enums/alert.enum';


@Injectable()
export class PlanetsEffects {
  constructor(
    private action$: Actions,
    private planetsService: PlanetsService,
    private toastService: AlertService,
    ) {
  }

  loadPlanets$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadPlanets),
      exhaustMap((action) => {
        return this.planetsService.getPlanets(action.page).pipe(
          map((data: IPlanetResponse) => loadPlanetsSuccess({
            count: data.count,
            next: data.next,
            previous: data.previous,
            planets: data.results,
            loading: false,
          })),
          catchError((err) => {
            this.toastService.setAlert({
              type: AlertType.danger,
              text: err.message
            })
            return of(loadPlanetsFail({ error: err.message, loading: false }))
          })
        )
      })
    )
  )
}
