import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IPeopleResponse, IPerson } from '../../shared/interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<IPeopleResponse>(environment.apiUrl + '/api/people');
  }

  getPersonById(id: string) {
    return this.http.get<IPerson>(environment.apiUrl + '/api/people/' + id);
  }
}
