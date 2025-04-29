import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  cars = [
    { name: 'Truffade Adder', img: 'assets/adder.png', maxSpeed: '250 km/h', fuel: 'Gasolina', year: 2022, price: 1000000 },
    { name: 'Bravado Banshee', img: 'assets/banshee.webp', maxSpeed: '240 km/h', fuel: 'Gasolina', year: 2021, price: 900000 },
    { name: 'Grotti Cheetah', img: 'assets/cheetah.webp', maxSpeed: '260 km/h', fuel: 'Eléctrico', year: 2023, price: 1500000 },
    { name: 'Overflod Entity XF', img: 'assets/entityxf.png', maxSpeed: '245 km/h', fuel: 'Híbrido', year: 2020, price: 1200000 },
    { name: 'Itali GTB', img: 'assets/italigtb.webp', maxSpeed: '255 km/h', fuel: 'Gasolina', year: 2022, price: 1300000 },
    { name: 'Itali GTO', img: 'assets/italigto.webp', maxSpeed: '265 km/h', fuel: 'Eléctrico', year: 2023, price: 1600000 },

  ];

  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.cars.length) % this.cars.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.cars.length;
  }

  getBoxClass(index: number): string {
    if (index === this.currentIndex) {
      return 'box active';
    } else if (index === (this.currentIndex - 1 + this.cars.length) % this.cars.length) {
      return 'box prev';
    } else if (index === (this.currentIndex + 1) % this.cars.length) {
      return 'box next';
    } else {
      return 'box hidden';
    }
  }
}