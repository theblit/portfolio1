import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, DestroyRef, OnDestroy, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

import { CV } from '../data/cv';
import { Icon } from '../shared/icon';
import { RevealDirective } from '../shared/reveal.directive';
import { NAV_LINKS, ScrollSpyService } from '../shared/scroll-spy.service';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/** Construit le lien mailto utilisé quand aucun service de formulaire n'est configuré. */
export function buildMailto(to: string, form: ContactForm): string {
  const subject = form.subject.trim() || `Contact depuis le portfolio — ${form.name.trim()}`;
  const body = `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, RevealDirective, Icon],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly spy = inject(ScrollSpyService);
  private readonly route = inject(ActivatedRoute);
  private readonly doc = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly cv = CV;
  readonly currentExperience = CV.experiences.find((e) => e.current) ?? CV.experiences[0];
  readonly currentEducation = CV.education.find((e) => e.current) ?? CV.education[0];

  // ---- Formulaire de contact ----
  form: ContactForm = { name: '', email: '', subject: '', message: '' };
  /** Champ "piège" anti-spam : un humain ne le remplit jamais. */
  honeypot = '';
  readonly submitted = signal(false);
  readonly sent = signal(false);
  readonly sending = signal(false);
  readonly error = signal<string | null>(null);
  readonly usesMailto = !CV.formspreeId;

  private sectionObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observeSections();
    this.route.fragment
      .pipe(filter(Boolean), takeUntilDestroyed(this.destroyRef))
      .subscribe((fragment) => setTimeout(() => this.spy.scrollTo(fragment), 50));
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  go(event: Event, id: string): void {
    event.preventDefault();
    this.spy.scrollTo(id);
  }

  phoneHref(): string {
    return 'tel:' + CV.phone.replace(/[^+\d]/g, '');
  }

  submit(form: NgForm): void {
    this.submitted.set(true);
    this.error.set(null);

    if (this.honeypot) {
      this.sent.set(true);
      return;
    }
    if (form.invalid) {
      this.error.set('Merci de corriger les champs indiqués avant d’envoyer.');
      return;
    }

    if (this.usesMailto) {
      const href = buildMailto(CV.email, this.form);
      this.doc.defaultView?.open(href, '_self');
      this.sent.set(true);
      return;
    }

    this.sending.set(true);
    this.http
      .post(
        `https://formspree.io/f/${CV.formspreeId}`,
        {
          name: this.form.name.trim(),
          email: this.form.email.trim(),
          subject: this.form.subject.trim() || 'Contact depuis le portfolio',
          message: this.form.message.trim(),
        },
        { headers: { Accept: 'application/json' } },
      )
      .subscribe({
        next: () => {
          this.sending.set(false);
          this.sent.set(true);
        },
        error: () => {
          this.sending.set(false);
          this.error.set('L’envoi a échoué. Réessayez dans un instant ou écrivez-moi directement par email.');
        },
      });
  }

  reset(): void {
    this.form = { name: '', email: '', subject: '', message: '' };
    this.honeypot = '';
    this.submitted.set(false);
    this.sent.set(false);
    this.error.set(null);
  }

  private observeSections(): void {
    const win = this.doc.defaultView;
    if (!win || typeof IntersectionObserver === 'undefined') return;

    const sections = NAV_LINKS.map((l) => this.doc.getElementById(l.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (!sections.length) return;

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) this.spy.active.set(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5] },
    );
    sections.forEach((s) => this.sectionObserver!.observe(s));
  }
}
