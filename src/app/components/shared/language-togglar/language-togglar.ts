import { Component, inject, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Language } from '@app/services/language/language';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  imports: [ToggleButtonModule, FormsModule],
  selector: 'app-language-togglar',
  styleUrl: './language-togglar.css',
  templateUrl: './language-togglar.html',
})
export class LanguageTogglar {
  private languageService = inject(Language);

  isEnglish = linkedSignal(() => this.languageService.isEnglish());
}
