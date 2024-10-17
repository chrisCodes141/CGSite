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
  bio: string = '';
  skills: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
  hobbies: string[] = ['Excercise', 'Meditating', 'Reading', 'Journaling', 'Traveling', 'Cooking'];
}
