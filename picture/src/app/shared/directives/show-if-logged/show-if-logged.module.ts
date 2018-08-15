import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIfLoggedDirective } from './show-if-logged.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShowIfLoggedDirective],
  exports: [ShowIfLoggedDirective]
})
export class ShowIfLoggedModule { }
