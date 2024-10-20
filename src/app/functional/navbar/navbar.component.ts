import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss', 
  providers: [DatePipe]
})
export class NavbarComponent {
  currentDate = new Date(); 
}
