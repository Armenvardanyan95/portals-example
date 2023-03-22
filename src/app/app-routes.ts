import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about.component';
import { HomeComponent } from './pages/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, },
];

