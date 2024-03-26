import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FilmsService } from './services/films.service';



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
  ],
  providers: [],
})
export class CoreModule { }
