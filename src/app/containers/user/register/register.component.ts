import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user.model';
import { UserService } from 'src/app/shared/services/user.service';

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
    private route: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  async onSubmit(data) {
    this.user.username = data.value.Username;
    this.user.fullName = `${data.value.FirstName} ${data.value.LastName}`;
    this.user.email = data.value.Email;
    if (data.value.Password === data.value.ConfirmPassword) {
      this.user.password = data.value.Password;
      await this.userService.registration(this.user)
        .then(res => {
          if (res !== null) {
            // this.toastr.successToastr('Registration Completed, Please login', 'Success!');
            console.log(res);
          }
        })
        .catch(err => {
          // this.toastr.errorToastr(err.message, 'Error!');
        });
    } else {
      // this.toastr.errorToastr('Password must match Confirm Password', 'Error!');
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
