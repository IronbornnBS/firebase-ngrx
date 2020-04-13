import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../_interfaces/user.model';
import { UserService } from 'src/app/shared/services/user.service';

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
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.loginFailedMsg = '';
  }
  async onSubmit(data) {
    this.loginFailedMsg = '';
    this.error = '';
    this.user.email = data.value.Email;
    this.user.password = data.value.Password;
    this.userService.login(this.user.email, this.user.password)
        .then(res => {
          if (res !== null) {
            // this.toastr.successToastr('Registration Completed, Please login', 'Success!');
            this.route.navigate(['/annuity-list']);
          }
        })
        .catch(err => {
          // this.toastr.errorToastr(err.message, 'Error!');
        });
  }

  Register() {
    this.route.navigate(['/register']);
  }
}
