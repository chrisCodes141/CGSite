import { Component } from '@angular/core';
import { FormContactComponent } from '../form-contact/form-contact.component';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [FormContactComponent],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent {

}
