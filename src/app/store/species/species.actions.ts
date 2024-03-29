import { createAction, props } from '@ngrx/store';
import { ISpecies } from '../../shared/interfaces/species.interface';

export const LOAD_SPECIES = '[Species] load species';
export const LOAD_SPECIES_SUCCESS = '[Species] load species success';
export const LOAD_SPECIES_FAIL = '[Species] load species fail';

export const loadSpecies = createAction(LOAD_SPECIES, props<{
  loading: boolean,
  page: number;
}>());
export const loadSpeciesSuccess = createAction(
  LOAD_SPECIES_SUCCESS,
  props<{
    species: ISpecies[],
    loading: boolean,
    count: number;
    next: string | null,
    previous: string | null
  }>()
);
export const loadSpeciesFail = createAction(LOAD_SPECIES_FAIL, props<{ error: string, loading: boolean }>());
