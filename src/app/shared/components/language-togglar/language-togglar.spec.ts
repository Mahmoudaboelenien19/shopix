import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageTogglar } from './language-togglar';

describe('LanguageTogglar', () => {
  let component: LanguageTogglar;
  let fixture: ComponentFixture<LanguageTogglar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageTogglar],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageTogglar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
