import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadPeople, loadPeopleFail, loadPeopleSuccess } from './people.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { IPeopleResponse } from '../../shared/interfaces/people.interface';
import { PeopleService } from '../../core/services/people.service';
import { AlertService } from '../../core/services/alert.service';
import { AlertType } from '../../shared/enums/alert.enum';


@Injectable()
export class PeopleEffects {
  constructor(
    private action$: Actions,
    private peopleService: PeopleService,
    private toastService: AlertService,
    ) {
  }

  loadPeople$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadPeople),
      exhaustMap((action) => {
        return this.peopleService.getPeople(action.page).pipe(
          map((data: IPeopleResponse) => loadPeopleSuccess({
            count: data.count,
            next: data.next,
            previous: data.previous,
            people: data.results,
            loading: false,
          })),
          catchError((err) => {
            this.toastService.setAlert({
              type: AlertType.danger,
              text: err.message
            })
            return of(loadPeopleFail({ error: err.message, loading: false }))
          })
        )
      })
    )
  )
}
