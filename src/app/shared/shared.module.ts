import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { CardComponent } from './components/card/card.component';
import { MapChipsPipe } from './pipes/map-chips.pipe';
import { BaseButtonComponent } from './components/base-button/base-button.component';
import { PlaceloadComponent } from './components/placeload/placeload.component';



@NgModule({
  declarations: [
    NavLinkComponent,
    CardComponent,
    MapChipsPipe,
    BaseButtonComponent,
    PlaceloadComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    NavLinkComponent,
    CardComponent,
    MapChipsPipe,
    BaseButtonComponent,
    PlaceloadComponent,
    CommonModule
  ]
})
export class SharedModule { }
