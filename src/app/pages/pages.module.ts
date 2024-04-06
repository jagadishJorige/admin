import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages.routing';
import { NavbarComponent } from '../components/navbar/navbar.component';


@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
