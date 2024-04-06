import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import {FormsModule} from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgxEditorModule } from 'ngx-editor';
import { CKEditorModule } from 'ng2-ckeditor';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
const routes : Routes = [
  { path : '', component : PostsComponent , pathMatch : 'full'}
]

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FileUploadModule,
    FormsModule,
    MultiSelectModule,
    NgxEditorModule,
    CKEditorModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    DialogModule,
    TagModule,
    ButtonModule
  ],
  providers : [MessageService,ConfirmationService]
})
export class PostsModule { }
