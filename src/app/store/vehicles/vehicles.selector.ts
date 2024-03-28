import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehiclesModel } from './vehicles.model';


export const getVehiclesState = createFeatureSelector<VehiclesModel>('vehicles');

export const vehiclesSelector = createSelector(getVehiclesState, (state) => state)
