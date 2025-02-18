import { Component } from '@angular/core';
import { FormContactComponent } from '../form-contact/form-contact.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [FormContactComponent, MatIconModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent {

}
