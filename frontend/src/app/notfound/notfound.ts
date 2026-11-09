import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [RouterLink],
  template: `
    <main class="notfound" id="contenu">
      <div class="container notfound__inner">
        <p class="notfound__code" aria-hidden="true">404</p>
        <h1>Page introuvable</h1>
        <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <a routerLink="/" class="btn btn--primary">Retour à l'accueil</a>
      </div>
    </main>
  `,
  styles: `
    .notfound {
      display: flex;
      align-items: center;
      min-height: 100svh;
      padding: 120px 0 80px;
      text-align: center;
      background: radial-gradient(50% 40% at 50% 30%, var(--accent-soft), transparent 70%), var(--bg);
    }
    .notfound__inner {
      max-width: 560px;
    }
    .notfound__inner h1 {
      margin: 0 0 12px;
      font-size: clamp(1.8rem, 4vw, 2.6rem);
    }
    .notfound__inner p {
      margin: 0 0 28px;
      color: var(--muted);
    }
    .notfound__code {
      margin: 0 0 8px !important;
      font-size: clamp(5rem, 18vw, 9rem);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.04em;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent !important;
    }
  `,
})
export class Notfound {}
