import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@app/pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () => import('@app/pages/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: 'users',
    loadChildren: () => import('@app/pages/users/users.routes').then((m) => m.USERS_ROUTES),
  },
];
