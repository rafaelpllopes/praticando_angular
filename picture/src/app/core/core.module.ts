import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class CoreModule { }
