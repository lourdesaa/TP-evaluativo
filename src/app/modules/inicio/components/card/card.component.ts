import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Maquillaje } from 'src/app/models/maquillaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public info: Maquillaje[];

  constructor() {
    this.info = [
      {
        //labiales
        id: "",
        nombre: "Ver Labiales",
        ruta: "../../producto/pages/labiales.component.html",
        imagen: "https://pe.todomoda.com/media/catalog/product/7/6/76392201_2_1_20211028120419.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Labiales",
        categoria: "Labiales",
        tipo: "",
      },
      {
        id: "",
        nombre: "Ver Rostro",
        ruta: "",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76555801_0_1_20211202000754.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Rostro",
        categoria: "Rostro",
        tipo: "",

      },
      {
        id: "",
        nombre: "Ver Ojos",
        ruta: "",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76363401_0_3_20210811120117.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Ojos",
        categoria: "Ojos",
        tipo: "",

      },
      {
        id: "",
        nombre: "Ver Uñas",
        ruta: "",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76262585_0_3_20210628181103.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Uñas",
        categoria: "Uñas",
        tipo: "",
      }
    ]
  }
}