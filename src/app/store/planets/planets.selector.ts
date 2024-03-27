import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlanetsModel } from './planets.model';


export const getPlanetsState = createFeatureSelector<PlanetsModel>('planets');

export const planetsSelector = createSelector(getPlanetsState, (state) => state)
