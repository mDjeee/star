import { createReducer, on } from '@ngrx/store';
import { planetsState } from './planets.state';
import { loadPlanets, loadPlanetsFail, loadPlanetsSuccess } from './planets.actions';

const _planetsReducer = createReducer(planetsState,
  on(loadPlanets, (state, action) => {
    return {
      ...state,
      planets: [],
      error: '',
      loading: true,
    }
  }),
  on(loadPlanetsSuccess, (state, action) => {
    return {
      ...state,
      planets: action.planets,
      count: action.count,
      next: action.next,
      previous: action.previous,
      error: '',
      loading: false,
    }
  }),
  on(loadPlanetsFail, (state, action) => {
    return {
      ...state,
      planets: [],
      count: 0,
      next: null,
      previous: null,
      error: action.error,
      loading: false,
    }
  }),
  );

export function planetsReducer(state: any, action: any) {
  return _planetsReducer(state, action);
}
