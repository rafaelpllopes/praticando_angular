import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { VmessageModule } from '../shared/vmessage/vmessage.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule
  ],
  declarations: [ SigninComponent ]
})
export class HomeModule { }
