import { Component, OnInit } from '@angular/core';
import { AlertInterface } from '../../interfaces/alert.interface';
import { AlertType } from '../../enums/alert.enum';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    CommonModule
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit {
  alert?: AlertInterface;
  timeoutId?: number;

  constructor(private toastService: AlertService) {
  }

  ngOnInit() {
    this.toastService.getAlert().subscribe((alert) => {
      this.alert = alert;
      this.resetTimer();
    })
  }

  resetTimer() {
    if(this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => {
      this.alert = undefined
    }, 5000)
  }
}
