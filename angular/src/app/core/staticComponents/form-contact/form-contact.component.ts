import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from  '@angular/material/icon';


@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  contactForm: FormGroup;
  filesArray: File[] = [];
  fileCount: number = 0; 

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      subject: ['', Validators.required],
      message: ['', Validators.required],
      file: [null]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      for (let i = 0; i < input.files.length; i++) {
        this.filesArray.push(input.files[i]);
      }
    }
    this.fileCount = this.filesArray.length;
    input.value = ''; 
  }

  removeFile(file: File): void {
    this.filesArray = this.filesArray.filter(f => f !== file);
    this.fileCount = this.filesArray.length;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }
    console.log('Form data:', this.contactForm.value);
    console.log('Files to upload:', this.filesArray);

  }
}