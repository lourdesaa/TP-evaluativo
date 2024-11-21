import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto'
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Crear colección de productos del tipo Producto
  coleccionProductos: Producto[] = [];

  // Para manejar el estado de edicion y eliminacion de productos
  modalVisibleProducto: boolean = false;

  productoSeleccionado!: Producto;

  nombreImagen!: string; // Obtendra el nombre de la imagen

  imagen!: string; // Obtendra la ruta de la imagen

  // formulario para los productos
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    // imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    stock: new FormControl(0, Validators.required)
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    });
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        // idProducto no se toma porque es generado por la BD y no por el usuario
        idProducto: '',
        // el resto es tomado con información ingresada por el usuario
        nombre: this.producto.value.nombre!,
        descripcion: this.producto.value.descripcion!,
        precio: this.producto.value.precio!,
        categoria: this.producto.value.categoria!,
        // imagen ahora toma la URL generada desde Storage
        imagen: '',
        alt: this.producto.value.alt!,
        stock: this.producto.value.stock!,
        ruta: ''
      }


      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          Swal.fire({
            title: "Bien!",
            text: "Ha agregado un producto con éxito",
            icon: "success"
          });
        })

        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Uhh...",
            text: "Hubo un problema al agregar un nuevo producto"
          });
        })
    }
  }

  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true
    //toma los valores del producto elegido
    this.productoSeleccionado = productoSeleccionado
    Swal.fire({
      title: "Está seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
        Swal.fire({
          title: "Borrado!",
          text: "Se ha borrado correctamente",
          icon: "success"
        });
      }
    });
  }

  // Función para eliminar definitivamente al producto
  borrarProducto() {
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
      .then(respuesta => {
        Swal.fire({
          title: "Bien!",
          text: "Se ha eliminado correctamente",
          icon: "success"
        });
      })
      .catch(error => {
        alert("No se ha podido eliminar el producto \n" + error);
      })
  }

  // Función para seleccionar el producto a editar
  mostrarEditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado;
    // Enviar o "setear" los nuevos valores y reasignarlos a las variables
    // El ID no se vuelve a enviar ni se modifica, por ende no lo llamamos
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
      stock: productoSeleccionado.stock
    })
  }

  editarProducto() {
    let datos: Producto = {
      // Solo el ID toma y deja igual su valor
      idProducto: this.productoSeleccionado.idProducto,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!,
      stock: this.producto.value.stock!,
      ruta: ''
    }
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
      .then(producto => {
        Swal.fire({
          title: "Bien!",
          text: "Se ha modificado el producto con éxito",
          icon: "success"
        });
      })
      .catch(error => {
        Swal.fire({
          title: "Uhh",
          text: "Hubo un problema al modificar el producto",
          icon: "error"
        });
      })
  }
}