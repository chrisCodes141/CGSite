import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = false;

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
    }
  }

  loadTheme(): void {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('isDarkTheme');
      this.isDarkTheme = savedTheme === 'true';
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
    }
  }

  isDark(): boolean {
    return this.isDarkTheme;
  }
}