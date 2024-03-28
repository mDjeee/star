import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { CardComponent } from './components/card/card.component';
import { MapChipsPipe } from './pipes/map-chips.pipe';
import { BaseButtonComponent } from './components/base-button/base-button.component';
import { PlaceloadComponent } from './components/placeload/placeload.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';



@NgModule({
  declarations: [
    NavLinkComponent,
    CardComponent,
    MapChipsPipe,
    BaseButtonComponent,
    PlaceloadComponent,
    PaginationComponent,
    CardLoaderComponent,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    NavLinkComponent,
    CardComponent,
    MapChipsPipe,
    BaseButtonComponent,
    PlaceloadComponent,
    CommonModule,
    PaginationComponent,
    CardLoaderComponent,
    PageHeaderComponent,
  ]
})
export class SharedModule { }
