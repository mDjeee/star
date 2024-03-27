import { createAction, props } from '@ngrx/store';

export const LOAD_FILMS = '[Films] load films';
export const LOAD_FILMS_SUCCESS = '[Films] load films success';
export const LOAD_FILMS_FAIL = '[Films] load films fail';

export const loadFilms = createAction(LOAD_FILMS, props<{
  loading: boolean,
  page: number;
}>());
export const loadFilmsSuccess = createAction(
  LOAD_FILMS_SUCCESS,
  props<{
    films: any,
    loading: boolean,
    count: number;
    next: string | null,
    previous: string | null
  }>()
);
export const loadFilmsFail = createAction(LOAD_FILMS_FAIL, props<{ error: string, loading: boolean }>());
