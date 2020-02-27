import { Injectable } from '@angular/core';
import { LocaleInterface } from '../models/locale.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private locale: LocaleInterface;

  constructor(private Translate: TranslateService) {
    this.getLocale();
    this.Translate.use(this.locale.lang || 'en');
  }
  getLocale() {
    const user_data = JSON.parse(localStorage.getItem('user_data'));
    this.locale = (user_data && user_data.locale) ? user_data.locale : null;
  }
}
