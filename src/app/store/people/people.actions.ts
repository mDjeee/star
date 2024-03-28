import { createAction, props } from '@ngrx/store';
import { IPerson } from '../../shared/interfaces/people.interface';

export const LOAD_PEOPLE = '[People] load people';
export const LOAD_PEOPLE_SUCCESS = '[People] load people success';
export const LOAD_PEOPLE_FAIL = '[People] load people fail';

export const loadPeople = createAction(LOAD_PEOPLE, props<{
  loading: boolean,
  page: number;
}>());
export const loadPeopleSuccess = createAction(
  LOAD_PEOPLE_SUCCESS,
  props<{
    people: IPerson[],
    loading: boolean,
    count: number;
    next: string | null,
    previous: string | null
  }>()
);
export const loadPeopleFail = createAction(LOAD_PEOPLE_FAIL, props<{ error: string, loading: boolean }>());
