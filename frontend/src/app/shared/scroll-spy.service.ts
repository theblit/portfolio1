import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface NavLink {
  id: string;
  label: string;
}

/** Sections de la page d'accueil, dans l'ordre d'affichage. */
export const NAV_LINKS: NavLink[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projets', label: 'Projets' },
  { id: 'formation', label: 'Formation' },
  { id: 'competences', label: 'Compétences' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

/** Section active partagée entre la page et le header, et défilement vers une section. */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly active = signal<string>(NAV_LINKS[0].id);

  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router);

  scrollTo(id: string): void {
    const el = this.doc.getElementById(id);
    if (!el) {
      void this.router.navigate(['/'], { fragment: id });
      return;
    }

    const reduced = this.doc.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });

    try {
      const url = id === NAV_LINKS[0].id ? '/' : `#${id}`;
      this.doc.defaultView?.history.replaceState(this.doc.defaultView.history.state, '', url);
    } catch {
      // history indisponible : on ignore.
    }
  }
}
