import { createAction, props } from '@ngrx/store';
import { IStarship } from '../../shared/interfaces/starships.interface';

export const LOAD_STARSHIPS = '[Starships] load starships';
export const LOAD_STARSHIPS_SUCCESS = '[Starships] load starships success';
export const LOAD_STARSHIPS_FAIL = '[Starships] load starships fail';

export const loadStarships = createAction(LOAD_STARSHIPS, props<{
  loading: boolean,
  page: number;
}>());
export const loadStarshipsSuccess = createAction(
  LOAD_STARSHIPS_SUCCESS,
  props<{
    starships: IStarship[],
    loading: boolean,
    count: number;
    next: string | null,
    previous: string | null
  }>()
);
export const loadStarshipsFail = createAction(LOAD_STARSHIPS_FAIL, props<{ error: string, loading: boolean }>());
