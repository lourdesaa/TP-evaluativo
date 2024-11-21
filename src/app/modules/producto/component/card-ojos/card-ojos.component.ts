import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-ojos',
  templateUrl: './card-ojos.component.html',
  styleUrls: ['./card-ojos.component.css']
})
export class CardOjosComponent {
  // Definimos colección local de productos
  coleccionOjos: Producto[] = [];

  coleccionProducto:Producto[]=[]
  // Variable local para obtener producto seleccionado
  productoSeleccionado!: Producto;

  // Variable para manejar estado de un modal
  modalVisible: boolean = false;


  //Directivas para comuncarse con el componente padre
  @Input() productoReciente: string = ''

  //Output sera definido como un nuevo evento
  @Output() productoAgregado = new EventEmitter<Producto>

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProducto = producto;
      this.mostrarProductoOjos();
    })
  }

// Función para filtrar los productos que sean del tipo "juguetes"
mostrarProductoOjos(){
  // forEach: itera la colección
  this.coleccionProducto.forEach(producto => {

    if(producto.categoria === "ojos"){
      // .push: sube o agrega un item a una colección
      this.coleccionOjos.push(producto);
    }
  })
}

  // Función para modal que muestre la información de un producto en específico
  mostrarVer(info: Producto) {
    // Habilita visibilidad del modal
    this.modalVisible = true;

    // Guarda información de un producto elegido por el usuario
    this.productoSeleccionado = info;
  }

}