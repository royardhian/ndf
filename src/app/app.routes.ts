import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { PromoComponent } from './pages/promo/promo.component';
import { MitraComponent } from './pages/mitra/mitra.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'workshop', component: WorkshopComponent },
  { path: 'promo', component: PromoComponent },
  { path: 'mitra', component: MitraComponent },
];
