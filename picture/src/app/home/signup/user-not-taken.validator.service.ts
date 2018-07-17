import { AbstractControl } from '@angular/forms';
import { Injectable } from "@angular/core";

import { debounceTime, switchMap, map, first, switchMapTo } from 'rxjs/operators';

import { SignupService } from './signup.service';


@Injectable({ providedIn: 'root'})
export class UserNotTakenValidatorService {
    constructor(private signupService: SignupService) {}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                   this.signupService.checkUserNameTaken(userName)
                ))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true} : null))
                .pipe(first());
        }
    }
}