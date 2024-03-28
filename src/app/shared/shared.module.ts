import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { CardComponent } from './components/card/card.component';
import { MapChipsPipe } from './pipes/map-chips.pipe';
import { PlaceloadComponent } from './components/placeload/placeload.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
    NavLinkComponent,
    CardComponent,
    MapChipsPipe,
    PlaceloadComponent,
    PaginationComponent,
    CardLoaderComponent,
    PageHeaderComponent,
    UserNavComponent,
    UserCardComponent,
    ErrorComponent,
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
    PlaceloadComponent,
    CommonModule,
    PaginationComponent,
    CardLoaderComponent,
    PageHeaderComponent,
    UserNavComponent,
    UserCardComponent,
    ErrorComponent,
  ]
})
export class SharedModule { }
