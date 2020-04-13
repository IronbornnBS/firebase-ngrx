import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../_interfaces/user.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as userActions from '../state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    username: '',
    fullName: '',
    password: ''
  };
  loginFailedMsg: string;
  error: string;
  constructor(
    private route: Router,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.loginFailedMsg = '';
  }
  async onSubmit(data) {
    this.loginFailedMsg = '';
    this.error = '';
    this.user.email = data.value.Email;
    this.user.password = data.value.Password;
    this.store.dispatch(new userActions.Login(this.user));
  }

  Register() {
    this.route.navigate(['/register']);
  }
}
