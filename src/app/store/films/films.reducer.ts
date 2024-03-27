import { createReducer, on } from '@ngrx/store';
import { filmsState } from './films.state';
import { loadFilms, loadFilmsFail, loadFilmsSuccess } from './films.actions';

const _filmsReducer = createReducer(filmsState,
  on(loadFilms, (state, action) => {
    return {
      ...state,
      films: [],
      error: '',
      loading: true,
    }
  }),
  on(loadFilmsSuccess, (state, action) => {
    return {
      ...state,
      films: action.films,
      count: action.count,
      next: action.next,
      previous: action.previous,
      error: '',
      loading: false,
    }
  }),
  on(loadFilmsFail, (state, action) => {
    return {
      ...state,
      films: [],
      count: 0,
      next: null,
      previous: null,
      error: action.error,
      loading: false,
    }
  }),
  );

export function filmsReducer(state: any, action: any) {
  return _filmsReducer(state, action);
}
