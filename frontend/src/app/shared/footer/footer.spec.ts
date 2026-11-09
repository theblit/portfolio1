import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Footer } from './footer';

describe('Footer', () => {
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    await fixture.whenStable();
  });

  it('affiche l’année courante', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(String(new Date().getFullYear()));
  });
});
