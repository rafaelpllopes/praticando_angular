import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoadingInterceptor {

    constructor(private loadingService: LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpSentEvent | 
        HttpHeaderResponse | 
        HttpProgressEvent |
        HttpResponse<any> | 
        HttpUserEvent<any>> {
            return next
                .handle(req)
                .pipe(tap(event => {
                    if(event instanceof HttpResponse) {
                        this.loadingService.stop();
                    } else {
                        this.loadingService.start();
                    }
                }));
    }
}