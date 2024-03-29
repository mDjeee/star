import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  isOpen = new BehaviorSubject<boolean>(false);
  constructor() { }
}
