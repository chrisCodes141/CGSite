import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuActive: boolean = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive; // Toggle the menu state
  }
}
