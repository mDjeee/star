import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SpeciesModel } from './species.model';


export const getSpeciesState = createFeatureSelector<SpeciesModel>('species');

export const speciesSelector = createSelector(getSpeciesState, (state) => state)
