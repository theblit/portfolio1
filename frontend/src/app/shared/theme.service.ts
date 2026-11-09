import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

/** Thème clair/sombre mémorisé dans localStorage, appliqué via l'attribut data-theme sur <html>. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly KEY = 'theme';

  readonly theme = signal<Theme>(this.readInitial());

  toggle(): void {
    this.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  set(theme: Theme): void {
    this.theme.set(theme);
    this.doc.documentElement.setAttribute('data-theme', theme);
    try {
      this.doc.defaultView?.localStorage.setItem(this.KEY, theme);
    } catch {
      // stockage indisponible : on garde le thème en mémoire seulement.
    }
  }

  private readInitial(): Theme {
    // index.html a déjà posé data-theme avant le rendu pour éviter un flash.
    const attr = this.doc.documentElement.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr;
    try {
      const saved = this.doc.defaultView?.localStorage.getItem(this.KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {
      // ignore
    }
    return this.doc.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
