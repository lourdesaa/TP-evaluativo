import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto'; // Importa el modelo de Producto
import { CrudService } from 'src/app/modules/admin/services/crud.service'; // Importa el servicio CRUD para obtener productos

@Component({
  selector: 'app-card-destacados', // Selector para el componente
  templateUrl: './card-destacados.component.html', // Archivo de plantilla HTML
  styleUrls: ['./card-destacados.component.css'] // Archivo de estilos CSS
})
export class CardDestacadosComponent {

  // Definimos la colección de productos
  coleccionProductos: Producto[] = []; // Mantiene todos los productos obtenidos desde el servicio

  // Colección de productos filtrados por categoría "Ver mas"
  coleccionInicio: Producto[] = [];

  // Variable local para almacenar el producto seleccionado para el modal
  productoSeleccionado!: Producto;

  // Variable para manejar la visibilidad del modal
  modalVisible: boolean = false;

  // Variable booleana para mostrar la sección de "última compra" (no está en uso actualmente)
  compraVisible: boolean = false;

  // Definimos la propiedad info como un array de productos
  public info: Producto[];

  constructor(public servicioCrud: CrudService) {
    // Inicializamos la colección de productos (estos datos podrían venir del servidor)
    this.info = [
      {
        nombre: "Paleta de sombras para ojos 'preppy cool'",
        imagen: "https://ar.todomoda.com/media/catalog/product/8/0/80920201_3_1_20240704162505.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "paleta", // Texto alternativo para la imagen
        categoria: "Ver mas", // Categoría del producto
        idProducto: '', // ID del producto (vacío en este caso)
        precio: 8000, // Precio del producto
        descripcion: 'Paleta de 9 sombras para ojos, antioxidante con vitamina E', // Descripción del producto
        stock: 0, // Stock del producto (en este caso 0)
        ruta: '' // Ruta del producto (vacía)
      },
      {
        nombre: "Polvo de maquillaje #powder mode on! wqeqw",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/9/79954701_2_1_20240325211311.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Rostro", // Texto alternativo para la imagen
        categoria: "Ver mas", // Categoría del producto
        idProducto: '', // ID del producto (vacío)
        precio: 7500, // Precio del producto
        descripcion: 'Polvo de maquillaje con textura extra fina y efecto matificante', // Descripción del producto
        stock: 0, // Stock del producto
        ruta: '' // Ruta del producto
      },
      {
        nombre: "Lip oil hidratante y nutritivo efecto glossy - lucky charm",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/8/78834501_1_1_20230327180242.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Ojos", // Texto alternativo para la imagen
        categoria: "Ver mas", // Categoría del producto
        idProducto: '', // ID del producto
        precio: 4600, // Precio del producto
        descripcion: 'Lip oil hidratante y nutritivo #glossy lip must - Peach', // Descripción del producto
        stock: 0, // Stock del producto
        ruta: '' // Ruta del producto
      },
      {
        nombre: "Esmalte para uñas con brillo y de acabado cremoso",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76940301_1_1_20220512181453.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Uñas", // Texto alternativo para la imagen
        categoria: "Ver mas", // Categoría del producto
        idProducto: '', // ID del producto
        precio: 2200, // Precio del producto
        descripcion: 'Esmalte para uñas con brillo y de acabado cremoso', // Descripción del producto
        stock: 0, // Stock del producto
        ruta: '' // Ruta del producto
      }
    ];
  }

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Llamada al servicio para obtener los productos desde la base de datos
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      // Al recibir los productos, se asignan a la colección de productos
      this.coleccionProductos = producto;

      // Mostrar los productos filtrados para la sección de inicio
      this.mostrarProductoInicio();
    });
  }

  // Función que muestra el producto en un modal con más detalles
  mostrarVer(info: Producto) {
    // Habilita la visibilidad del modal
    this.modalVisible = true;

    // Guarda la información del producto seleccionado
    this.productoSeleccionado = info;
  }

  // Función que filtra los productos de la categoría "Ver mas"
  mostrarProductoInicio() {
    // Filtra los productos en coleccionProductos por la categoría "Ver mas"
    this.coleccionProductos.forEach(producto => {
      if (producto.categoria === "Ver mas") {
        // Agrega los productos filtrados a la colección coleccionInicio
        this.coleccionInicio.push(producto);
      }
    });
  }
}
