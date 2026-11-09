import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  { path: '', component: Home, title: "Kolawole Adam's Christian · Support informatique, systèmes et réseaux" },
  { path: 'not-found', component: Notfound, title: 'Page introuvable' },
  { path: '**', redirectTo: '/not-found' },
];
