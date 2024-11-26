import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-destacados',
  templateUrl: './card-destacados.component.html',
  styleUrls: ['./card-destacados.component.css']
})
export class CardDestacadosComponent {

  // Definimos colección local de productos
  coleccionProductos: Producto[] = [];

// Colección de sólo productos de categoría ""
coleccionInicio: Producto[] = [];

  // Variable local para obtener producto seleccionado
  productoSeleccionado!: Producto;

  // Variable para manejar estado de un modal
  modalVisible: boolean = false;

  //Booleana para manejar la visibilidad de "ultima compra"
  compraVisible: boolean = false;


  public info: Producto[];



  constructor(public servicioCrud: CrudService) {
    this.info = [
      {
        //labiales
        nombre: "Paleta de sombras para ojos 'preppy cool'",
        imagen: "https://ar.todomoda.com/media/catalog/product/8/0/80920201_3_1_20240704162505.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "paleta",
        categoria: "Ver mas",
        idProducto: '',
        precio: 8000,
        descripcion: 'Paleta de 9 sombras para ojos, antioxidante con vitamina E',
        stock: 0,
        ruta: ''
      },
      {
        nombre: "Polvo de maquillaje #powder mode on!",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/9/79954701_2_1_20240325211311.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:8411",
        alt: "Rostro",
        categoria: "Ver mas",
        idProducto: '',
        precio: 7500,
        descripcion: 'Polvo de maquillaje con de textura extra fina y efecto matificante',
        stock: 0,
        ruta: ''
      },
      {
        nombre: "Lip oil hidratante y nutritivo efecto glossy - lucky charm",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/8/78834501_1_1_20230327180242.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Ojos",
        categoria: "Ver mas",
        idProducto: '',
        precio: 4600,
        descripcion: 'Lip oil hidratante y nutritivo #glossy lip must - Peach',
        stock: 0,
        ruta: ''
      },
      {
        nombre: "Esmalte para uñas con brillo y de acabado cremoso",
        imagen: "https://ar.todomoda.com/media/catalog/product/7/6/76940301_1_1_20220512181453.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
        alt: "Uñas",
        categoria: "Ver mas",
        idProducto: '',
        precio: 2200,
        descripcion: 'Esmalte para uñas con brillo y de acabado cremoso',
        stock: 0,
        ruta: ''
      }
    ]
  }


  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      // mostrar la colección actual de Inicio
      this.mostrarProductoInicio();
    })

  }




   // Función para modal que muestre la información de un producto en específico
   mostrarVer(info: Producto) {
    // Habilita visibilidad del modal
    this.modalVisible = true;

    // Guarda información de un producto elegido por el usuario
    this.productoSeleccionado = info;
  }

  // Función para filtrar los productos que sean del tipo ""
  mostrarProductoInicio(){
    // forEach: itera la colección
    this.coleccionProductos.forEach(producto => {
      // Si la categoría del producto es igual a "maquinas", se enviará a la 
      // colección de bancos específicada

      if(producto.categoria === "Ver mas"){
        // .push: sube o agrega un item a una colección
        this.coleccionInicio.push(producto);
      }
    })
  }
}