import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadAuth, loadAuthSuccess, loadAuthFail, logoutAuth, logoutAuthSuccess, logoutAuthFail } from './auth.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AlertService } from '../../core/services/alert.service';
import { AlertType } from '../../shared/enums/alert.enum';
import { AuthService } from '../../core/services/auth.service';
import { AuthModel } from './auth.model';
import { IUser } from '../../shared/interfaces/user.interface';


@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private toastService: AlertService,
    ) {
  }

  loadAuth$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadAuth),
      exhaustMap((action) => {
        return this.authService.signIn(action.user as IUser).pipe(
          map((data: AuthModel) => loadAuthSuccess({
            user: data.user,
            token: data.token,
            loading: false,
            error: ''
          })),
          catchError((err) => {
            this.toastService.setAlert({
              type: AlertType.danger,
              text: err.message
            })
            return of(loadAuthFail({ error: err.message, loading: false }))
          })
        )
      })
    )
  )

  logoutAuth$ = createEffect(() =>
    this.action$.pipe(
      ofType(logoutAuth),
      exhaustMap((action) => {
        return this.authService.logout().pipe(
          map((data: AuthModel) => logoutAuthSuccess({
            loading: false,
            user: data.user,
            token: data.token
          })),
          catchError((err) => {
            this.toastService.setAlert({
              type: AlertType.danger,
              text: err.message
            })
            return of(logoutAuthFail({ error: err.message, loading: false }))
          })
        )
      })
    )
  )
}
