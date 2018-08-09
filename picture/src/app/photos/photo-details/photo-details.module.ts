import { ReactiveFormsModule } from '@angular/forms';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { VmessageModule } from '../../shared/vmessage/vmessage.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule
  ],
  declarations: [
    PhotoDetailsComponent, 
    PhotoCommentsComponent
  ],
  exports: [
    PhotoDetailsComponent, 
    PhotoCommentsComponent
  ]
})
export class PhotoDetailsModule { }
