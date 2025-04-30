import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from "./gallery/gallery.component";
import { InicioComponent } from "./inicio/inicio.component";
import { ResenasComponent } from "./resenas/resenas.component";

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, NavbarComponent, GalleryComponent, InicioComponent, ResenasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gta4stars';
}
