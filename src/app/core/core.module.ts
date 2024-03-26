import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CoreModule { }
