import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

   loginResponse;

  constructor() { }

  ngOnInit() {
    if (!this.loginResponse) {
        const userLoginData = JSON.parse(localStorage.getItem('user_data'));
        this.loginResponse = userLoginData.login;
    }
  }

}
