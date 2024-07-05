import { Component } from '@angular/core';
import { Alfajor } from 'src/app/models/alfajor';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public info: Alfajor[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "Alfajor Cofler Block Simple",
        precio: 1.838,
        imagen: "https://arcorencasa.com/wp-content/uploads/2024/01/29012024-14365.jpg",
        alt: "alfajor1"
      },
      {
        id: "",
        nombre: "Alfajor ByN Blanco Simple",
        precio: 1.838,
        imagen: "https://arcorencasa.com/wp-content/uploads/2023/06/20230626-14118.jpg",
        alt: "alfajor2"
      },
      {
        id: "",
        nombre: "Alfajor Aguila Minitorta Brownie Triple",
        precio: 2.214,
        imagen: "https://arcorencasa.com/wp-content/uploads/2023/08/20230824-13359.jpg",
        alt: "alfajor3"
      }
    ]
  }

}
