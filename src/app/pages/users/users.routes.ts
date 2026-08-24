import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then((m) => m.Cart),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout/checkout').then((m) => m.Checkout),
  },
  {
    path: 'fav',
    loadComponent: () => import('./fav/fav').then((m) => m.Fav),
  },
];
