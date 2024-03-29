import { createReducer, on } from '@ngrx/store';
import { authState } from './auth.state';
import { loadAuth, loadAuthFail, loadAuthSuccess, logoutAuth, logoutAuthFail, logoutAuthSuccess } from './auth.actions';

const _authReducer = createReducer(authState,
  on(loadAuth, (state, action) => {
    return {
      ...state,
      user: null,
      error: '',
      loading: true,
    }
  }),
  on(loadAuthSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      token: action.token,
      loading: false,
    }
  }),
  on(loadAuthFail, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false,
    }
  }),

  on(logoutAuth, (state, action) => {
    return {
      ...state,
      loading: true,
    }
  }),
  on(logoutAuthSuccess, (state, action) => {
    return {
      ...state,
      user: action.user || null,
      token: '',
      loading: false,
    }
  }),
  on(logoutAuthFail, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error,
    }
  }),
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
