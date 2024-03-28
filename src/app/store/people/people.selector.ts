import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PeopleModel } from './people.model';


export const getPeopleState = createFeatureSelector<PeopleModel>('people');

export const peopleSelector = createSelector(getPeopleState, (state) => state)
