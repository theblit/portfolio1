# Portfolio — Kolawole Adam's Christian

Site vitrine personnel : support informatique, systèmes et réseaux. Angular 21 (composants standalone, signals), SCSS, aucun backend.

## Démarrer en local

```bash
cd frontend
npm install
npm start
```

Puis ouvrir `http://localhost:4200/`.

| Commande        | Rôle                                              |
| --------------- | ------------------------------------------------- |
| `npm start`     | Serveur de développement avec rechargement à chaud |
| `npm run build` | Build de production dans `dist/portfolio/browser` |
| `npm test`      | Tests unitaires (Vitest)                          |

## Mettre à jour le contenu

Tout le contenu est dans **`src/app/data/cv.ts`** : bio, coordonnées, expérience, projets, formation, certifications, compétences, services, articles de veille. Modifier ce fichier suffit, le site se met à jour au prochain build.

- **CV PDF** : remplacer `public/cv/CV-Kolawole-Adams-Christian.pdf` (garder le même nom, ou changer `CV.file` dans `cv.ts`).
- **Photo** : `src/assets/img/kolawole-adams.png`.
- **Formulaire de contact** : créer un formulaire gratuit sur [formspree.io](https://formspree.io) avec l'adresse email du portfolio, puis coller l'identifiant (la partie après `/f/`) dans `CV.formspreeId`. Tant qu'il est vide, le bouton « Envoyer » ouvre le client mail du visiteur avec le message pré-rempli.

## Structure

```
frontend/
├─ public/cv/               # CV téléchargeable
├─ src/
│  ├─ app/
│  │  ├─ data/cv.ts         # Tout le contenu du site
│  │  ├─ home/              # Page d'accueil (hero, à propos, expérience, projets, formation, compétences, services, veille, contact)
│  │  ├─ notfound/          # Page 404
│  │  └─ shared/            # header, footer, thème clair/sombre, scroll-spy, directive appReveal
│  ├─ assets/img/           # Photo et illustrations des articles
│  └─ styles.scss           # Variables de thème, boutons, sections, animations
└─ vercel.json              # Déploiement Vercel (sortie dist/portfolio/browser, routes vers index.html)
```

## Déploiement

Sur Vercel : importer le dépôt, définir **Root Directory = `frontend`**. Le fichier `vercel.json` fournit la commande de build et le dossier de sortie. Chaque push sur `main` redéploie le site.
