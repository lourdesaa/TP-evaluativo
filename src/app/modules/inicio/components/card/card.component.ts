import { Component } from '@angular/core';
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
        nombre: "'Be a roller babe' - peach",
        precio: 6900,
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76234303_1_1_20240523180645.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "LabialRoller",
        categoria: "Labiales",
        tipo: "Brillo labial"
      },
      {
        id: "",
        nombre: "Gloss obsessed",
        precio: 6900,
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76291401_0_1_20220830180825.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "GlossObsessed",
        categoria: "Labiales",
        tipo: "Brillo labial"
      },
      {
        id: "",
        nombre: "Very berry",
        precio: 5300,
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76197501_1_1_20240523180645.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "BalsamoBerry",
        categoria: "Labiales",
        tipo: "Balsamo labial"
      },
      // {
      //   id: "",
      //   nombre: "Tinta para labios - heroic velvet - like heaven",
      //   precio: 8.300,
      //   imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76907601_0_1_20220919180305.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
      //   alt: "TintaHeroic",
      //   tipo: "Labiales",
      // },
      // {
      //   id: "",
      //   nombre: "Gloss para labios 'preppy cool' - peach y nude",
      //   precio: 6.900,
      //   imagen: "https://ar.todomoda.com/media/catalog/product/8/0/80921303_0_1_20240704162505.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
      //   alt: "GlossPeach",
      //categoria:"Labiales",
      //   tipo: "Labiales",
      // },
      // {
      //   id: "",
      //   nombre: "'#cheffkiss' - cotton candy",
      //   precio: 8300,
      //   imagen: "https://ar.todomoda.com/media/catalog/product/7/9/79952501_1_1_20240222181301.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
      //   alt: "",
      //categoria:"Labiales",
      //   tipo: "Tinta para labios",
      // },
      // {
      //   id: "",
      //   nombre: "",
      //   precio: 0,
      //   imagen: "",
      //   alt: "",
      //categoria:"",
      //   tipo: "",
      // },
    ]
  }
}