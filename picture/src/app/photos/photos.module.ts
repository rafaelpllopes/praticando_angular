import { PhotoService } from './photo/photo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhotoComponent],
  exports: [ PhotoComponent ]
})
export class PhotosModule { }
