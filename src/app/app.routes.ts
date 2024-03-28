import { Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [

  {
    path: 'login', loadComponent: ()=> import('./components/external/login/login.component')
  },

  {
    path: 'messages', loadComponent: ()=> import('./components/internal/interanl.component'), canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }

];
