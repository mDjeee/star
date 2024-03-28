import { createReducer, on } from '@ngrx/store';
import { peopleState } from './people.state';
import { loadPeople, loadPeopleFail, loadPeopleSuccess } from './people.actions';

const _peopleReducer = createReducer(peopleState,
  on(loadPeople, (state, action) => {
    return {
      ...state,
      people: [],
      error: '',
      loading: true,
    }
  }),
  on(loadPeopleSuccess, (state, action) => {
    return {
      ...state,
      people: action.people,
      count: action.count,
      next: action.next,
      previous: action.previous,
      error: '',
      loading: false,
    }
  }),
  on(loadPeopleFail, (state, action) => {
    return {
      ...state,
      people: [],
      count: 0,
      next: null,
      previous: null,
      error: action.error,
      loading: false,
    }
  }),
  );

export function peopleReducer(state: any, action: any) {
  return _peopleReducer(state, action);
}
