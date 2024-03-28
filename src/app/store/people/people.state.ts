import { PeopleModel } from './people.model';

export const peopleState: PeopleModel = {
  people: [],
  loading: false,
  error: '',
  next: null,
  previous: null,
  count: 0,
}
