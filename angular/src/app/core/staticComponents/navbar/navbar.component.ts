import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../../singletonServices/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuActive: boolean = false;

  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive; // Toggle the menu state
  }
}
