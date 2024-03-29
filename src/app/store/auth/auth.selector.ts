import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthModel } from './auth.model';


export const getAuthState = createFeatureSelector<AuthModel>('auth');

export const authSelector = createSelector(getAuthState, (state) => state)
