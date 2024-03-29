import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAuth, logoutAuth } from './auth.actions';
import { authSelector } from './auth.selector';
import { IUser } from '../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  constructor(private store: Store) { }

  public auth$ = this.store.select(authSelector);

  fetchAuth(user: IUser) {
    this.store.dispatch(loadAuth({ loading: true, user: user }));
  }

  logOut() {
    this.store.dispatch(logoutAuth({ loading: true, user: null }));
  }
}
