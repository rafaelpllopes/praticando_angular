import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { UserService } from './../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$: Observable<User>;
  user: User;

  constructor(private userService: UserService) {
    this.user$ = userService
      .getUser();
    this.user$
      .subscribe(user => this.user = user);
  }
}
