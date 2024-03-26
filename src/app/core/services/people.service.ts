import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(environment.apiUrl + 'api/people/');
  }

  getPersonById(id: string) {
    return this.http.get(environment.apiUrl + 'api/people/' + id);
  }
}
