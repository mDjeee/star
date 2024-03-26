import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    NavLinkComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    NavLinkComponent,
    CardComponent,
  ]
})
export class SharedModule { }
