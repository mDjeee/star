import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPeopleResponse, IPerson } from '../../shared/interfaces/people.interface';
import { apiPeopleUrl } from '../../../constants/endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(page: number = 1) {
    const query = page <= 1 ? '' : `?page=${page}`
    return this.http.get<IPeopleResponse>(apiPeopleUrl + query);
  }

  getPersonById(id: string) {
    return this.http.get<IPerson>(apiPeopleUrl + id);
  }
}
