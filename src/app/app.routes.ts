import { Routes } from '@angular/router';
import { StructureComponent } from './components/pages/structure/structure.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'structure', component: StructureComponent },
];
