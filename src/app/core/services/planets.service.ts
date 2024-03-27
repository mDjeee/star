import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IPlanet, IPlanetResponse } from '../../shared/interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets() {
    return this.http.get<IPlanetResponse>(environment.apiUrl + '/api/planets');
  }

  getPlanetById(id: string) {
    return this.http.get<IPlanet>(environment.apiUrl + '/api/planets/' + id);
  }
}
