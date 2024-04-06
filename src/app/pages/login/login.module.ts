import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ToastModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers : [MessageService,ConfirmationService]
})
export class LoginModule {}
