import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsComponent } from './editors.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path : '' , component : EditorsComponent , pathMatch : 'full'}
]

@NgModule({
  declarations: [
    EditorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditorsModule { }
