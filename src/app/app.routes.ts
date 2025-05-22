import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallbackComponent } from './callback.component';  // New component to handle OAuth callback

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'callback', component: CallbackComponent }, // OAuth redirect callback
];
