import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule
  ],
  declarations: [PhotoDetailsComponent],
  exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }