import { STORAGE_CONSTANTS } from './../../shared/constants/storage.constants';
import { Injectable, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { Lang } from '@app/models/shared/lang.interface';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private cookies = inject(SsrCookieService);
  private document = inject(DOCUMENT);

  private currentLang = signal<Lang>(this.getInitialLang());
  isEnglish = computed(() => this.currentLang() === 'en');

  constructor() {
    this.applyLanguage(this.currentLang());
  }

  private getInitialLang(): Lang {
    const saved = this.cookies.get(STORAGE_CONSTANTS.LANG_COOKIE) as Lang;
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  }

  switchLanguage(lang: Lang) {
    this.currentLang.set(lang);
    this.applyLanguage(lang);
    this.cookies.set(STORAGE_CONSTANTS.LANG_COOKIE, lang, { expires: 365, path: '/' });
  }

  private applyLanguage(lang: Lang) {
    this.translate.use(lang);
    this.document.documentElement.setAttribute('lang', lang);
    this.document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
}
