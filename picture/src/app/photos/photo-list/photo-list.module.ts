import { CardModule } from './../../shared/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './../photo/photo.module';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    CardModule
  ],
  declarations: [ 
    PhotoListComponent,
    LoadButtonComponent,
    PhotosComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ]
})
export class PhotoListModule { }
