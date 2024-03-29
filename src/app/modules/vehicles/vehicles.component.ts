import { Component, OnInit } from '@angular/core';
import { VehiclesFacade } from '../../store/vehicles/vehicles.facade';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';

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
  constructor(public vehiclesFacade: VehiclesFacade, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const currentPage = parseInt(params['page'], 10) || 1;
      this.vehiclesFacade.fetchVehicles(currentPage);
    })
  }

  pageChanged(page: number) {
    this.vehiclesFacade.fetchVehicles(page);
  }
}
