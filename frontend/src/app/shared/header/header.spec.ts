import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ouvre et ferme le menu mobile', () => {
    component.toggleMenu();
    expect(component.menuOpen()).toBe(true);
    expect(document.body.classList.contains('menu-open')).toBe(true);
    component.closeMenu();
    expect(component.menuOpen()).toBe(false);
  });

  it('bascule le thème', () => {
    const before = component.themeService.theme();
    component.themeService.toggle();
    expect(component.themeService.theme()).not.toBe(before);
    expect(document.documentElement.getAttribute('data-theme')).toBe(component.themeService.theme());
  });
});
