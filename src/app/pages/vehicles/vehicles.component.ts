import { Component, OnInit } from '@angular/core';
import { VehiclesFacade } from '../../store/vehicles/vehicles.facade';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    SharedModule
  ],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent implements OnInit {
  constructor(public vehiclesFacade: VehiclesFacade) { }

  ngOnInit() {
    this.vehiclesFacade.fetchVehicles(1);
  }

  pageChanged(page: number) {
    this.vehiclesFacade.fetchVehicles(page);
  }
}
