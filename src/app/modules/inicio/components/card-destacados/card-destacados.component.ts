import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card-destacados',
  templateUrl: './card-destacados.component.html',
  styleUrls: ['./card-destacados.component.css']
})
export class CardDestacadosComponent {


  public info: Producto[];


  constructor() {
    this.info = [
      {
        //labiales
        nombre: "Ver mas",
        imagen: "https://ar.todomoda.com/media/catalog/product/8/1/81336001_1_1_20240930174308.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Labiales",
        categoria: "bjfahsbdljfhasbdlfjhbasjhdfbasdjklfbasjdf",
        idProducto: '',
        precio: 0,
        descripcion: '',
        stock: 0,
        ruta: ''
      },
      {
        nombre: "Ver mas",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76555801_0_1_20211202000754.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Rostro",
        categoria: "Rostro",
        idProducto: '',
        precio: 0,
        descripcion: '',
        stock: 0,
        ruta: ''
      },
      {
        nombre: "Ver mas",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76363401_0_3_20210811120117.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Ojos",
        categoria: "Ojos",
        idProducto: '',
        precio: 0,
        descripcion: '',
        stock: 0,
        ruta: ''
      },
      {
        nombre: "Ver mas",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76262585_0_3_20210628181103.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Uñas",
        categoria: "Uñas",
        idProducto: '',
        precio: 0,
        descripcion: '',
        stock: 0,
        ruta: ''
      }
    ]
  }

}
