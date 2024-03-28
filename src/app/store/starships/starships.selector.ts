import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StarshipsModel } from './starships.model';


export const getStarshipsState = createFeatureSelector<StarshipsModel>('starships');

export const starshipsSelector = createSelector(getStarshipsState, (state) => state)
