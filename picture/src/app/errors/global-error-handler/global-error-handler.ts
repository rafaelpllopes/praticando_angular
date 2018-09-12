import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { UserService } from "../../core/user/user.service";
import { ServerLogService } from "./server-log.service";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(
        private injector: Injector
    ) {}
    
    handleError(error: any): void {
        const router = this.injector.get(Router);
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        console.log('passei pelo handler');
        const message = error.message ? 
            error.message : 
            error.toString();

        if(environment.production) router.navigate(['/error']);

        StackTrace
            .fromError(error)
            .then(strackFrames => {
                const strackAsString = strackFrames
                    .map(sf => sf.toString())
                    .join('\n');
                console.log(message);
                console.log(strackAsString);

                serverLogService.log({
                    message, 
                    url, 
                    userName: userService.getUserName(), 
                    stack: strackAsString
                }).subscribe(
                    () => console.log('Error logged on server'),
                    err => {
                        console.log(err);
                        console.log('Fail to send error log to server');
                    }
                    );
            })
    }
}