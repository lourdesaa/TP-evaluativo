import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Maquillaje } from 'src/app/models/maquillaje';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  //     {
  //       id: "",
  //       nombre: "Ver Rostro",
  //       ruta: "",
  //       imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76555801_0_1_20211202000754.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
  //       alt: "Rostro",
  //       categoria: "Rostro",
  //       tipo: "",

  //     },
  //     {
  //       id: "",
  //       nombre: "Ver Ojos",
  //       ruta: "",
  //       imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76363401_0_3_20210811120117.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
  //       alt: "Ojos",
  //       categoria: "ojos",
  //       tipo: "",

  //     },
  //     {
  //       id: "",
  //       nombre: "Ver Uñas",
  //       ruta: "",
  //       imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76262585_0_3_20210628181103.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
  //       alt: "Uñas",
  //       categoria: "Uñas",
  //       tipo: "",
  //     }
  //   ]
  // }

  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Producto[];

  detalle: Producto = {
    idProducto: '',
    nombre: '',
    precio: 0,
    descripcion: '',
    categoria: '',
    imagen: '',
    alt: '',
    stock: 0,
    ruta: ''
  };

  coleccionProductosCarrito: Producto[] = [];


  mostrarProducto(producto: Producto) {
    this.detalle = producto
  }


  constructor() {
    this.info = [
      {
        nombre: "Ver Ojos",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76363401_0_3_20210811120117.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Un chanchito",
        idProducto: '',
        precio: 0,
        descripcion: '',
        categoria: 'ojos',
        stock: 0,
        ruta: ''
      },
      {
        nombre: "Ver Labiales",
        imagen: "https://pe.todomoda.com/media/catalog/product/7/6/76392201_2_1_20211028120419.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Un caballo",
        idProducto: '',
        precio: 0,
        descripcion: '',
        categoria: 'labiales',
        stock: 0,
        ruta: ''
      },
      {
        nombre: "Ver Rostro",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76555801_0_1_20211202000754.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Un carpincho",
        idProducto: '',
        precio: 0,
        descripcion: '',
        categoria: 'rostro',
        stock: 0,
        ruta: ''
      },
      {
        nombre: "Ver Uñas",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76262585_0_3_20210628181103.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Un carpincho",
        idProducto: '',
        precio: 0,
        descripcion: '',
        categoria: 'unas',
        stock: 0,
        ruta: ''
      }

    ]
  }
}