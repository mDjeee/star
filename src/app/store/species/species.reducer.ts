import { createReducer, on } from '@ngrx/store';
import { speciesState } from './species.state';
import { loadSpecies, loadSpeciesFail, loadSpeciesSuccess } from './species.actions';

const _speciesReducer = createReducer(speciesState,
  on(loadSpecies, (state, action) => {
    return {
      ...state,
      species: [],
      error: '',
      loading: true,
    }
  }),
  on(loadSpeciesSuccess, (state, action) => {
    return {
      ...state,
      species: action.species,
      count: action.count,
      next: action.next,
      previous: action.previous,
      error: '',
      loading: false,
    }
  }),
  on(loadSpeciesFail, (state, action) => {
    return {
      ...state,
      species: [],
      count: 0,
      next: null,
      previous: null,
      error: action.error,
      loading: false,
    }
  }),
  );

export function speciesReducer(state: any, action: any) {
  return _speciesReducer(state, action);
}
