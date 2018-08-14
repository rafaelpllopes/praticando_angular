import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';
import { AlertModule } from '../shared/components/alert/alert.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlertModule
  ],
  declarations: [ HeaderComponent, FooterComponent ],
  exports: [ HeaderComponent, FooterComponent ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
