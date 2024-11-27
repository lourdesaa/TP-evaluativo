import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importamos el Router para redirigir a otras rutas si es necesario
import { Maquillaje } from 'src/app/models/maquillaje'; // Importación de modelo de Maquillaje (aunque no se usa en el código actual)
import { Producto } from 'src/app/models/producto'; // Importación de modelo de Producto

@Component({
  selector: 'app-card', // Selector del componente, usado para llamarlo en el HTML
  templateUrl: './card.component.html', // Ruta del archivo HTML asociado a este componente
  styleUrls: ['./card.component.css'] // Ruta del archivo de estilos asociados
})
export class CardComponent {

  // Propiedad pública tipo array que contiene los productos a mostrar
  public info: Producto[];

  // Objeto detalle para almacenar los datos de un producto específico
  detalle: Producto = {
    idProducto: '', // Identificador único del producto
    nombre: '', // Nombre del producto
    precio: 0, // Precio del producto
    descripcion: '', // Descripción del producto
    categoria: '', // Categoría del producto
    imagen: '', // URL de la imagen del producto
    alt: '', // Descripción alternativa de la imagen
    stock: 0, // Cantidad de productos disponibles
    ruta: '' // Ruta donde se encuentra el producto
  };

  // Array para almacenar los productos agregados al carrito (aunque no está siendo usado en el código actual)
  coleccionProductosCarrito: Producto[] = [];

  // Método para mostrar los detalles de un producto específico
  mostrarProducto(producto: Producto) {
    this.detalle = producto; // Asignamos el producto seleccionado al objeto detalle
  }

  // Constructor del componente
  constructor() {
    // Inicialización de los productos (información ficticia en este caso)
    this.info = [
      {
        nombre: "Ver Ojos", // Nombre del producto
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76363401_0_3_20210811120117.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841", // URL de la imagen del producto
        alt: "Un chanchito", // Descripción alternativa de la imagen
        idProducto: '', // ID vacío (por definir)
        precio: 0, // Precio vacío (por definir)
        descripcion: '', // Descripción vacía (por definir)
        categoria: 'ojos', // Categoría del producto
        stock: 0, // Stock vacío (por definir)
        ruta: '' // Ruta vacía (por definir)
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
