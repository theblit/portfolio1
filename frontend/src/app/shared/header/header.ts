import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CV } from '../../data/cv';
import { NAV_LINKS, ScrollSpyService } from '../scroll-spy.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly spy = inject(ScrollSpyService);
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);
  readonly themeService = inject(ThemeService);

  readonly cv = CV;
  readonly links = NAV_LINKS;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly active = this.spy.active;
  readonly isDark = () => this.themeService.theme() === 'dark';

  readonly onHome = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url.split(/[?#]/)[0] === '/'),
    ),
    { initialValue: true },
  );

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set((this.doc.defaultView?.scrollY ?? 0) > 16);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if ((this.doc.defaultView?.innerWidth ?? 0) > 960) this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen() ? this.closeMenu() : this.openMenu();
  }

  openMenu(): void {
    this.menuOpen.set(true);
    this.doc.body.classList.add('menu-open');
  }

  closeMenu(): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    this.doc.body.classList.remove('menu-open');
  }

  go(event: Event, id: string): void {
    event.preventDefault();
    this.closeMenu();
    this.spy.scrollTo(id);
  }
}
