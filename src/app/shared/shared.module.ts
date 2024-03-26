import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';



@NgModule({
  declarations: [
    NavLinkComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    NavLinkComponent,
  ]
})
export class SharedModule { }
