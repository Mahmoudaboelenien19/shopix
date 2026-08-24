import { Routes } from '@angular/router';

export const STORE_FRONT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../storefront/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('../storefront/about/about').then((m) => m.About),
  },

  {
    path: 'products',
    loadComponent: () => import('../storefront/products/products').then((m) => m.Products),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('../storefront/product/product').then((m) => m.Product),
  },
];
