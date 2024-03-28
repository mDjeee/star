import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadPeople, loadPeopleSuccess, loadPeopleFail } from './people.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { IPeopleResponse } from '../../shared/interfaces/people.interface';
import { PeopleService } from '../../core/services/people.service';


@Injectable()
export class PeopleEffects {
  constructor(private action$: Actions, private peopleService: PeopleService) {
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
          catchError((err) => of(loadPeopleFail({ error: err.message, loading: false })))
        )
      })
    )
  )
}
