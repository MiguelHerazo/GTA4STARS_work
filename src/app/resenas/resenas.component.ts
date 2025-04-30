import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resenas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.css'
})
export class ResenasComponent {
  @ViewChild('reviewWrapper', { static: false }) reviewWrapper!: ElementRef;

  reviews = [
    {
      name: 'Michael De Santa',
      comment: '¡Compré el Zentorno y ahora soy el rey de las calles de Los Santos! Excelente servicio.',
      img: 'assets/img1.webp',
      stars: 5,
      halfStar: false
    },
    {
      name: 'Franklin Clinton',
      comment: 'El Adder es una bestia. ¡Perfecto para escapar de la policía en mis misiones!',
      img: 'assets/img2.webp',
      stars: 4,
      halfStar: true
    },
    {
      name: 'Trevor Philips',
      comment: 'El Osiris no solo es rápido, también es elegante. ¡Ideal para mis negocios en Vinewood!',
      img: 'assets/img3.webp',
      stars: 5,
      halfStar: false
    },
    {
      name: 'Lamar Davis',
      comment: 'El T20 es perfecto para las carreras clandestinas. ¡Gracias por el excelente servicio!',
      img: 'assets/img4.webp',
      stars: 4,
      halfStar: true
    },
    {
      name: 'Ron Jakowski',
      comment: 'El Itali GTO es mi favorito. ¡No hay mejor lugar para comprar autos en Los Santos!',
      img: 'assets/img5.webp',
      stars: 5,
      halfStar: false
    },
    {
      name: 'Wade Hebert',
      comment: 'El Cheetah es increíblemente rápido. ¡Perfecto para mis escapadas en Blaine County!',
      img: 'assets/img6.webp',
      stars: 4,
      halfStar: true
    }
  ];

  scrollLeft() {
    this.reviewWrapper.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.reviewWrapper.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
