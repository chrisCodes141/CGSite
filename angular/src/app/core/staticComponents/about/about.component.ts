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
  aspires: string[] = ['Solutions Architect', 'Team Lead', 'Entreprenuer'];
  skills: string[] = ['Java', 'Angular', 'TypeScript', 'JavaScript', 'HTML5 & CSS3'];
  hobbies: string[] = ['Traveling','Excercise', 'Meditating', 'Reading', 'Journaling',  'Cooking', 'Investing'];
}
