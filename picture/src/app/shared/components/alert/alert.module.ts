import { AlertComponent } from './alert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class AlertModule { }
