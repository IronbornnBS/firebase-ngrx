import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../_interfaces/user.model';

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
  ) { }

  ngOnInit() {
    this.loginFailedMsg = '';
  }
  async onSubmit(data) {
    this.loginFailedMsg = '';
    this.error = '';
    this.user.email = data.value.Email;
  }

  Register() {
    this.route.navigate(['/register']);
  }
}
