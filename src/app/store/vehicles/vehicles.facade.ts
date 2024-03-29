import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadVehicles } from './vehicles.actions';
import { vehiclesSelector } from './vehicles.selector';


@Injectable({
  providedIn: 'root'
})
export class VehiclesFacade {
  constructor(private store: Store) { }

  public vehicles$ = this.store.select(vehiclesSelector);

  fetchVehicles(page: number = 1) {
    this.store.dispatch(loadVehicles({ loading: true, page }));
  }
}
