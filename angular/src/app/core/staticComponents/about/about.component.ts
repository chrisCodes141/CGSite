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

  name: string = 'Christopher Guzowski';
  aspires: string[] = ['AI Engineer Role', 'Be part of a long-term team', 'Push Boundaries of Agentic AI'];
  skills: string[] = ['Python', 'Java', 'Angular', 'TypeScript', 'JavaScript'];
  hobbies: string[] = ['Reading', 'Excercise', 'Cooking', 'Investing'];
}
