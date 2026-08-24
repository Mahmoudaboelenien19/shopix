import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '@app/services/language/language';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  imports: [ToggleButtonModule, FormsModule],
  selector: 'app-language-togglar',
  styleUrl: './language-togglar.css',
  templateUrl: './language-togglar.html',
})
export class LanguageTogglar {
  private languageService = inject(LanguageService);
  isEnglish = model(this.languageService.isEnglish());

  onChange() {
    this.languageService.switchLanguage(this.isEnglish() ? 'en' : 'ar');
  }
}
