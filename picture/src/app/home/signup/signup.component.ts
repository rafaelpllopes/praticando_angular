import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(40)
      ]
    ],
      userName: ['', [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(30),
        lowerCaseValidator
        //Validators.pattern(/^[a-z0-9_\-]+$/)
      ]
    ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    });
  }

}
