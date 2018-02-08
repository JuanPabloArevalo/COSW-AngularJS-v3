import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
  })
  
export class SignInPageComponent implements OnInit {
    public loginError : string;
    public signInForm: FormGroup;
    public authService: AuthService;
   constructor(public formBuilder: FormBuilder, public router: Router, public usersService: UserService) {
    }

  ngOnInit() {
     this.signInForm = this.formBuilder.group({
          username: '',
          password: ''
    });
  }
  
doLogin() {
    this.usersService.login(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['tasks']);
      }, error => {
         this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
      })
  }

}
