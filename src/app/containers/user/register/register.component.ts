import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user.model';
import * as fromRoot from '../../../state/app.state';
import * as userActions from '../state/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {
    uid: '',
    email: '',
    username: '',
    fullName: '',
    password: ''
  };
  formValid: boolean;

  constructor(
    private store: Store<fromRoot.State>,
    private route: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit(data) {
    this.user.username = data.value.Username;
    this.user.fullName = `${data.value.FirstName} ${data.value.LastName}`;
    this.user.email = data.value.Email;
    if (data.value.Password === data.value.ConfirmPassword) {
      this.user.password = data.value.Password;
      this.store.dispatch(new userActions.Register(this.user));
    }
  }

  onFormChanged(formData) {
    if (
      formData.value.FirstName === undefined ||
      formData.value.LastName === undefined ||
      formData.value.Username === undefined ||
      formData.value.Password === undefined ||
      formData.value.ConfirmPassword === undefined ||
      formData.value.Email === undefined
    ) {
      return;
    }

    if (formData.value.Username.length !== 0) {
      if (formData.value.Email.length >= 5) {
        if (formData.value.FirstName.length !== 0) {
          if (formData.value.LastName.length !== 0) {
            if (formData.value.Password.length === formData.value.ConfirmPassword.length) {
              this.formValid = true;
              return;
            } else {
              this.formValid = false;
            }
          } else {
            this.formValid = false;
          }
        } else {
          this.formValid = false;
        }
      } else {
        this.formValid = false;
      }
    } else {
      this.formValid = false;
    }
  }

  navigate() {
    this.route.navigate(['/login']);
  }
}
