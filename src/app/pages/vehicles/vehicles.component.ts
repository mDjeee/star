import { Component, OnInit } from '@angular/core';
import { VehiclesFacade } from '../../store/vehicles/vehicles.facade';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [],
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
