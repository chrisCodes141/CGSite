import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/staticComponents/navbar/navbar.component';
import { AboutComponent } from './core/staticComponents/about/about.component';
import { ConnectComponent } from './core/staticComponents/connect/connect.component';
import { BlogComponent } from './core/staticComponents/blog/blog.component';
import { ProjectComponent } from './core/staticComponents/project/project.component';
import { ThemeService } from './core/singletonServices/theme.service';
import { VisitorService } from './core/singletonServices/visitor.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, NavbarComponent, AboutComponent, ConnectComponent, BlogComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = '';

  constructor(public themeService: ThemeService, private visitorService: VisitorService) {}

  ngOnInit() {
    this.visitorService.getVisitorMessage().subscribe(response => {
        this.message = response.message;
      });
  }
}
