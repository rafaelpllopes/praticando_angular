import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './../photo/photo.module';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule
  ],
  declarations: [ 
    PhotoListComponent,
    LoadButtonComponent,
    PhotosComponent,
    FilterByDescriptionPipe
  ]
})
export class PhotoListModule { }
