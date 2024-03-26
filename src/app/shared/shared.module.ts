import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { CardComponent } from './components/card/card.component';
import { MapChipsPipe } from './pipes/map-chips.pipe';



@NgModule({
  declarations: [
    NavLinkComponent,
    CardComponent,
    MapChipsPipe,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    NavLinkComponent,
    CardComponent,
    MapChipsPipe,
  ]
})
export class SharedModule { }
