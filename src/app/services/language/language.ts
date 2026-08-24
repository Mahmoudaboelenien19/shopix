import { Service, computed } from '@angular/core';
import { inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Service()
export class Language {
  private translate = inject(TranslateService);
  private currentLang = signal<'en' | 'ar'>('en');
  isEnglish = computed(() => this.currentLang() == 'en');
  switchLanguage(lang: 'en' | 'ar') {
    this.currentLang.set(lang);
    this.translate.use(lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
}
