import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  name: string = 'John Doe';
  bio: string = 'I am a software developer with a passion for creating dynamic and responsive web applications.';
  skills: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
  hobbies: string[] = ['Reading', 'Traveling', 'Photography', 'Cooking'];
}
