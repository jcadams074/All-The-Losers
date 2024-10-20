import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhoLostPageComponent } from "./pages/who-lost-page/who-lost-page.component";
import { LoserboardPageComponent } from "./pages/loserboard-page/loserboard-page.component";
import { HeaderComponent } from "./functional/header/header.component";
import { NavbarComponent } from "./functional/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhoLostPageComponent, LoserboardPageComponent, HeaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'losers-app';
}
