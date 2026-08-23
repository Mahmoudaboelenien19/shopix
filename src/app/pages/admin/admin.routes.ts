import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders-list/orders-list').then((m) => m.OrdersList),
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users-list/users-list').then((m) => m.UsersList),
  },
];
