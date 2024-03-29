import { createAction, props } from '@ngrx/store';
import { IVehicle } from '../../shared/interfaces/vehicles.interface';

export const LOAD_VEHICLES = '[Vehicles] load vehicles';
export const LOAD_VEHICLES_SUCCESS = '[Vehicles] load vehicles success';
export const LOAD_VEHICLES_FAIL = '[Vehicles] load vehicles fail';

export const loadVehicles = createAction(LOAD_VEHICLES, props<{
  loading: boolean,
  page: number;
}>());
export const loadVehiclesSuccess = createAction(
  LOAD_VEHICLES_SUCCESS,
  props<{
    vehicles: IVehicle[],
    loading: boolean,
    count: number;
    next: string | null,
    previous: string | null
  }>()
);
export const loadVehiclesFail = createAction(LOAD_VEHICLES_FAIL, props<{ error: string, loading: boolean }>());
