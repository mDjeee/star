import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IPlanet, IPlanetResponse } from '../../shared/interfaces/planets.interface';
import { apiPlanetsUrl } from '../../../constants/endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(page: number) {
    const query = page <=1 ? '' : `?page=${page}`;
    return this.http.get<IPlanetResponse>(apiPlanetsUrl + query);
  }

  getPlanetById(id: string) {
    return this.http.get<IPlanet>(apiPlanetsUrl + '/' + id);
  }
}
