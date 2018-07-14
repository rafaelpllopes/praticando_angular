import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkenOnHoverDirective } from './darken-on-hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ DarkenOnHoverDirective ],
  exports: [ DarkenOnHoverDirective ]
})
export class DarkenOnHoverModule { }
