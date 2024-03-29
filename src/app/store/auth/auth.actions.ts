import { createAction, props } from '@ngrx/store';
import { IUser } from '../../shared/interfaces/user.interface';

export const LOAD_AUTH = '[Auth] load auth';
export const LOAD_AUTH_SUCCESS = '[Auth] load auth success';
export const LOAD_AUTH_FAIL = '[Auth] load auth fail';

export const LOGOUT_AUTH = '[Auth] logout auth';
export const LOGOUT_AUTH_SUCCESS = '[Auth] logout auth success';
export const LOGOUT_AUTH_FAIL = '[Auth] logout auth fail';

export const loadAuth = createAction(LOAD_AUTH, props<{
  loading: boolean,
  user: IUser | null
}>());
export const loadAuthSuccess = createAction(
  LOAD_AUTH_SUCCESS,
  props<{
    user: IUser | null,
    loading: boolean,
    token: string | null,
    error: string
  }>()
);
export const loadAuthFail = createAction(LOAD_AUTH_FAIL, props<{ error: string, loading: boolean }>());


export const logoutAuth = createAction(LOGOUT_AUTH, props<{
  loading: boolean,
  user: null,
}>());
export const logoutAuthSuccess = createAction(
  LOGOUT_AUTH_SUCCESS,
  props<{
    loading: boolean,
    user: null,
    token: null
  }>()
);
export const logoutAuthFail = createAction(LOGOUT_AUTH_FAIL, props<{ error: string, loading: boolean }>());
