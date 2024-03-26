import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



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
    SharedModule,
    RouterLink,
  ]
})
export class CoreModule { }
