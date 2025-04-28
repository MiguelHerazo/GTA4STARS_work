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
    { name: 'Benefactor Krieger', img: 'assets/krieger.png', maxSpeed: '250 km/h', fuel: 'Gasolina', year: 2021, price: 1400000 },
    { name: 'Grotti Nero', img: 'assets/nero.webp', maxSpeed: '240 km/h', fuel: 'Híbrido', year: 2020, price: 1100000 },
    { name: 'Pegassi Osiris', img: 'assets/osiris.webp', maxSpeed: '245 km/h', fuel: 'Gasolina', year: 2022, price: 1250000 },
    { name: 'Vapid Reaper', img: 'assets/reaper.webp', maxSpeed: '250 km/h', fuel: 'Eléctrico', year: 2023, price: 1350000 },
    { name: 'Progen T20', img: 'assets/t20.webp', maxSpeed: '270 km/h', fuel: 'Gasolina', year: 2023, price: 2000000 },
    { name: 'Grotti Turismo R', img: 'assets/turismor.png', maxSpeed: '260 km/h', fuel: 'Eléctrico', year: 2023, price: 1500000 },
    { name: 'Pegassi Vacca', img: 'assets/vacca.webp', maxSpeed: '240 km/h', fuel: 'Gasolina', year: 2021, price: 800000 },
    { name: 'Progen X80 Proto', img: 'assets/x80proto.webp', maxSpeed: '280 km/h', fuel: 'Híbrido', year: 2024, price: 2500000 },
    { name: 'Ocelot XA-21', img: 'assets/xa21.webp', maxSpeed: '265 km/h', fuel: 'Gasolina', year: 2022, price: 1800000 },
    { name: 'Pegassi Zentorno', img: 'assets/zentorno.webp', maxSpeed: '240 km/h', fuel: 'Híbrido', year: 2021, price: 725000 },
    { name: 'Grotti Zorrusso', img: 'assets/zorrusso.png', maxSpeed: '250 km/h', fuel: 'Gasolina', year: 2023, price: 1400000 }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cars.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.cars.length) % this.cars.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
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