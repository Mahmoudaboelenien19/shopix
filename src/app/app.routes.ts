import { ADMIN_ROUTES } from './pages/admin/admin.routes';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/layout/user/user').then((m) => m.UserLayout),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/pages/storefront/store-front.routes').then((m) => m.STORE_FRONT_ROUTES),
      },
      {
        path: 'auth',
        loadChildren: () => import('@app/pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
      },
      {
        path: 'users',
        loadChildren: () => import('@app/pages/users/users.routes').then((m) => m.USERS_ROUTES),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () => import('@app/layout/admin-layout/admin-layout').then((m) => m.AdminLayout),
    children: [
      {
        path: '',
        loadChildren: () => import('@app/pages/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
      },
    ],
  },
];
