import { createReducer, on } from '@ngrx/store';
import { starshipsState } from './starships.state';
import { loadStarships, loadStarshipsFail, loadStarshipsSuccess } from './starships.actions';

const _starshipsReducer = createReducer(starshipsState,
  on(loadStarships, (state, action) => {
    return {
      ...state,
      starships: [],
      error: '',
      loading: true,
    }
  }),
  on(loadStarshipsSuccess, (state, action) => {
    return {
      ...state,
      starships: action.starships,
      count: action.count,
      next: action.next,
      previous: action.previous,
      error: '',
      loading: false,
    }
  }),
  on(loadStarshipsFail, (state, action) => {
    return {
      ...state,
      starships: [],
      count: 0,
      next: null,
      previous: null,
      error: action.error,
      loading: false,
    }
  }),
  );

export function starshipsReducer(state: any, action: any) {
  return _starshipsReducer(state, action);
}
