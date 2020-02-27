import { Component } from '@angular/core';
import {LocaleInterface} from './shared/models/locale.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'convoapp';
  constructor() {
    this.setUserLocale();
  }
  /*
  * Method: setUserLocale()
  * Purpose: set user locale settings in localStorage
  * @param: null
  * @return: void
  * Note: It is just a temporary method and will be deleted once actual functionality is implemented
  * */
  setUserLocale() {
    const userLocale: LocaleInterface = {
      country: 'Pakistan',
      lang: 'en'
    };

    localStorage.setItem('user_data', JSON.stringify({ locale: userLocale }));
  }
}
