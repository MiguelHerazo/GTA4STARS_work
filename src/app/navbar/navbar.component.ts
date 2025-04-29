import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuActive = false;

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }

  login(): void {
    console.log('Iniciar sesión');
  }
}
