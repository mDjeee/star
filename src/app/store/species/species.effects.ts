import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadSpecies, loadSpeciesFail, loadSpeciesSuccess } from './species.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ISpeciesResponse } from '../../shared/interfaces/species.interface';
import { SpeciesService } from '../../core/services/species.service';
import { AlertService } from '../../core/services/alert.service';
import { AlertType } from '../../shared/enums/alert.enum';


@Injectable()
export class SpeciesEffects {
  constructor(
    private action$: Actions,
    private speciesService: SpeciesService,
    private toastService: AlertService,
    ) {
  }

  loadSpecies$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadSpecies),
      exhaustMap((action) => {
        return this.speciesService.getSpecies(action.page).pipe(
          map((data: ISpeciesResponse) => loadSpeciesSuccess({
            count: data.count,
            next: data.next,
            previous: data.previous,
            species: data.results,
            loading: false,
          })),
          catchError((err) => {
            this.toastService.setAlert({
              type: AlertType.danger,
              text: err.message
            })
            return of(loadSpeciesFail({ error: err.message, loading: false }))
          })
        )
      })
    )
  )
}
