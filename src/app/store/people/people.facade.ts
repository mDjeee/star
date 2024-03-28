import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPeople } from './people.actions';
import { peopleSelector } from './people.selector';


@Injectable({
  providedIn: 'root'
})
export class PeopleFacade {
  constructor(private store: Store) { }

  public people$ = this.store.select(peopleSelector);

  fetchPeople(page: number = 1) {
    this.store.dispatch(loadPeople({ loading: true, page }));
  }
}
