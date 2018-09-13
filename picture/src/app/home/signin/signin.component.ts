import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  fromUrl: string;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder, private authService: AuthService, private router: Router, 
    private paltformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => this.fromUrl = params['fromUrl']);
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.paltformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(() => 
        this.fromUrl  
          ? this.router.navigateByUrl(this.fromUrl)
          : this.router.navigate([`user`, userName])
      , 
        err => {
        console.log(err);
        this.loginForm.reset();
        this.paltformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
        alert('Invalid user name or password');
      });


  }

}
