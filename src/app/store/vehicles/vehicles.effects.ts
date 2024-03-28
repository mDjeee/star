import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadVehicles, loadVehiclesFail, loadVehiclesSuccess } from './vehicles.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { VehiclesService } from '../../core/services/vehicles.service';
import { IVehiclesResponse } from '../../shared/interfaces/vehicles.interface';


@Injectable()
export class VehiclesEffects {
  constructor(private action$: Actions, private vehicleService: VehiclesService) {
  }

  loadVehicles$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadVehicles),
      exhaustMap((action) => {
        return this.vehicleService.getVehicles(action.page).pipe(
          map((data: IVehiclesResponse) => loadVehiclesSuccess({
            count: data.count,
            next: data.next,
            previous: data.previous,
            vehicles: data.results,
            loading: false,
          })),
          catchError((err) => of(loadVehiclesFail({ error: err.message, loading: false })))
        )
      })
    )
  )
}
