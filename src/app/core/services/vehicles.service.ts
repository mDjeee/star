import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiVehiclesUrl } from '../../../constants/endpoints.constants';
import { IVehicle, IVehiclesResponse } from '../../shared/interfaces/vehicles.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getVehicles(page: number) {
    const query = page <=1 ? '' : `?page=${page}`;
    return this.http.get<IVehiclesResponse>(apiVehiclesUrl + query);
  }

  getVehicleById(id: string) {
    return this.http.get<IVehicle>(apiVehiclesUrl + '/' + id);
  }
}
