import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user.model';
import * as fromRoot from '../../../state/app.state';
import * as userActions from '../state/user.actions';
import { Store, select } from '@ngrx/store';
import { UserSelector } from '../state/user.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage$: Observable<string>;
  user: User = {
    email: '',
    password: ''
  };
  formValid: boolean;

  constructor(
    private store: Store<fromRoot.State>,
    private userSelector: UserSelector,
    private route: Router
  ) { }

  ngOnInit() {
    this.errorMessage$ = this.store.pipe(select(this.userSelector.getError));
  }

  async onSubmit(data) {
    this.user.email = data.value.Email;
    if (data.value.Password === data.value.ConfirmPassword) {
      this.user.password = data.value.Password;
      this.store.dispatch(new userActions.Register(this.user));
    }
  }

  onFormChanged(formData) {
    if (
      formData.value.Password === undefined ||
      formData.value.ConfirmPassword === undefined ||
      formData.value.Email === undefined
    ) {
      return;
    }
    if (formData.value.Email.length >= 5) {
      if (formData.value.Password.length === formData.value.ConfirmPassword.length) {
        this.formValid = true;
        return;
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
