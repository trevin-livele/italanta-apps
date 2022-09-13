import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@iote/bricks';
import { UserService } from '@ngfi/angular';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
  user$: Observable<User>;
  constructor(userService: UserService<User>,
    private _router: Router,) {
    this.user$ = userService.getUser();
  }
  isAdmin = (user: any) => user.roles.admin;
  toAdmin = () => this._router.navigate(['admin', 'translate']);
}