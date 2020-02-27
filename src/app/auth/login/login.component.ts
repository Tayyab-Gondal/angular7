import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { loginModel } from './loginModel';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: LoginService, private Route: Router, private Translate: LocaleService) {
  }

  model = new loginModel('', '');

  ngOnInit() { }

  postData() {
    event.preventDefault();
    const formData: object = {
      'email': this.model.email,
      'pass': this.model.password,
      'ct': 'w2',
      'v': 2,
      'version': 2018110301,
      'timezoneOffset': 300
    };

    this.Auth.loginUser(formData).subscribe(
      (res) => {
        console.log('success');
        this.storeLoginLocally(res);
        console.log(res);
        this.Route.navigateByUrl('dashboard');
      },
      err => {
        console.dir('Error...');
        console.dir(err);
      }
    );
  }
    /*
   * Method: storeLoginLocally()
   * Purpose: set user login data in localStorage
   * @param data: user login response
   * @return: void
   * Note: It is just a temporary method and will be deleted once actual functionality is implemented
   * */
  storeLoginLocally(data) {
    const userData = JSON.parse(localStorage.getItem('user_data'));

    userData['login'] = data;
    localStorage.setItem('user_data', JSON.stringify(userData));
  }
}
