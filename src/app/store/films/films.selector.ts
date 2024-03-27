import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilmsModel } from './films.model';


export const getFilmsState = createFeatureSelector<FilmsModel>('films');

export const filmsSelector = createSelector(getFilmsState, (state) => state)
