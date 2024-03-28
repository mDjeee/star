import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AlertInterface } from '../../shared/interfaces/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert$ = new Subject<AlertInterface>();

  constructor() { }

  setAlert(alert: AlertInterface) {
    this.alert$.next(alert);
  }

  getAlert(): Observable<AlertInterface> {
    return this.alert$.asObservable();
  }
}
