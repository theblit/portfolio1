import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home, buildMailto } from './home';
import { CV } from '../data/cv';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('affiche le nom et le poste actuel', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.hero__title')?.textContent).toContain(CV.fullName);
    expect(el.textContent).toContain("DP World Côte d'Ivoire");
  });

  it('affiche tous les projets du CV', () => {
    const titles = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('.project h3')).map((h) =>
      h.textContent?.trim(),
    );
    expect(titles.length).toBe(CV.projects.length);
    expect(titles).toContain('Serveur VoIP Asterisk');
  });

  it('construit un lien mailto avec objet et message encodés', () => {
    const href = buildMailto('a@b.c', { name: 'Jean', email: 'j@x.y', subject: 'Poste', message: 'Bonjour à vous' });
    expect(href.startsWith('mailto:a@b.c?subject=Poste&body=')).toBe(true);
    expect(decodeURIComponent(href)).toContain('Bonjour à vous');
    expect(decodeURIComponent(href)).toContain('Jean (j@x.y)');
  });
});
