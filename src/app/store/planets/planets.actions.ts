import { createAction, props } from '@ngrx/store';
import { IPlanet } from '../../shared/interfaces/planets.interface';

export const LOAD_PLANETS = '[Planets] load planets';
export const LOAD_PLANETS_SUCCESS = '[Planets] load planets success';
export const LOAD_PLANETS_FAIL = '[Planets] load planets fail';

export const loadPlanets = createAction(LOAD_PLANETS, props<{
  loading: boolean,
  page: number;
}>());
export const loadPlanetsSuccess = createAction(
  LOAD_PLANETS_SUCCESS,
  props<{
    planets: IPlanet[],
    loading: boolean,
    count: number;
    next: string | null,
    previous: string | null
  }>()
);
export const loadPlanetsFail = createAction(LOAD_PLANETS_FAIL, props<{ error: string, loading: boolean }>());
