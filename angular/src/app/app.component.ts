import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/staticComponents/navbar/navbar.component';
import { AboutComponent } from './core/staticComponents/about/about.component';
import { ConnectComponent } from './core/staticComponents/connect/connect.component';
import { BlogComponent } from './core/staticComponents/blog/blog.component';
import { ProjectComponent } from './core/staticComponents/project/project.component';
import { ThemeService } from './core/singletonServices/theme.service';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, AboutComponent, ConnectComponent, BlogComponent, ProjectComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}

  ngOnInit() {
  
  }
}
