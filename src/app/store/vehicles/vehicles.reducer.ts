import { createReducer, on } from '@ngrx/store';
import { vehiclesState } from './vehicles.state';
import { loadVehicles, loadVehiclesFail, loadVehiclesSuccess } from './vehicles.actions';

const _vehiclesReducer = createReducer(vehiclesState,
  on(loadVehicles, (state, action) => {
    return {
      ...state,
      vehicles: [],
      error: '',
      loading: true,
    }
  }),
  on(loadVehiclesSuccess, (state, action) => {
    return {
      ...state,
      vehicles: action.vehicles,
      count: action.count,
      next: action.next,
      previous: action.previous,
      error: '',
      loading: false,
    }
  }),
  on(loadVehiclesFail, (state, action) => {
    return {
      ...state,
      vehicles: [],
      count: 0,
      next: null,
      previous: null,
      error: action.error,
      loading: false,
    }
  }),
  );

export function vehiclesReducer(state: any, action: any) {
  return _vehiclesReducer(state, action);
}
