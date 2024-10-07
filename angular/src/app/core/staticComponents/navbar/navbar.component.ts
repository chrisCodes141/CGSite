import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../../singletonServices/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuActive: boolean = false;

  constructor(private themeService: ThemeService) {}

  get theme() {
    return this.themeService.currentTheme;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive; // Toggle the menu state
  }
}
