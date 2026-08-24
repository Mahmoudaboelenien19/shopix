import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { USER_NAVIGATION } from '@app/shared/constants/navigation.constants';
import { Heart } from '@primeicons/angular/heart';
import { ShoppingCart } from '@primeicons/angular/shopping-cart';
import { Times } from '@primeicons/angular/times';
import { Bars } from '@primeicons/angular/bars';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet, Heart, ShoppingCart, Times, Bars],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class UserLayout {
  cartCount = signal(0); // replace with real cart service signal
  favCount = signal(0); // replace with real favorites service signal
  private userNavigationList = signal(USER_NAVIGATION);

  userNavigationItems = computed(() => this.userNavigationList());

  mobileOpen = signal(false);

  toggleMenu() {
    this.mobileOpen.update((v) => !v);
  }
  closeMenu() {
    this.mobileOpen.set(false);
  }
}
