import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@layout/user/user').then((m) => m.UserLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('./about/about').then((m) => m.About),
      },
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
      {
        path: 'products',
        loadComponent: () => import('./products/products').then((m) => m.Products),
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./product/product').then((m) => m.Product),
      },
    ],
  },
];
