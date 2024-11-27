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
  // Arreglo de productos del tipo `Producto`
  coleccionProductos: Producto[] = [];

  modalVisibleProducto: boolean = false;

  productoSeleccionado!: Producto;

  // **nombreImagen**: Contiene el nombre de la imagen del producto.
  nombreImagen!: string;

  // **imagen**: Contiene la ruta de la imagen del producto.
  imagen!: string;

  // **producto**: Formulario reactivo para crear o editar productos. Utiliza `FormGroup` para manejar los datos del formulario.
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    stock: new FormControl(0, Validators.required)
  });

  // Constructor del componente donde se inyecta el servicio CrudService
  constructor(public servicioCrud: CrudService) { }

  // Método del ciclo de vida de Angular, se ejecuta cuando el componente es inicializado
  ngOnInit(): void {
    // Llama al método obtenerProducto del servicio CrudService, que retorna los productos
    // El subscribe se usa para recibir los productos desde la base de datos y ejecutar una función con los datos
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      // Asigna la lista de productos obtenida a la variable coleccionProductos, para usarla en la vista
      this.coleccionProductos = producto;
    });
  }

  // Función asincrónica para agregar un nuevo producto
  async agregarProducto() {
    // Verifica si el formulario de producto es válido (todos los campos obligatorios están completos)
    if (this.producto.valid) {

      // Crea un objeto nuevo de tipo Producto, usando los valores del formulario
      let nuevoProducto: Producto = {
        // idProducto se deja vacío porque será generado automáticamente por la base de datos (Firebase)
        idProducto: '',

        // Resto de los campos toman los valores ingresados en el formulario
        nombre: this.producto.value.nombre!, // Nombre del producto
        descripcion: this.producto.value.descripcion!, // Descripción del producto
        precio: this.producto.value.precio!, // Precio del producto
        categoria: this.producto.value.categoria!, // Categoría del producto

        // Imagen inicialmente está vacía, ya que la URL se generará desde el servicio de Storage (Firebase Storage)
        imagen: '',

        alt: this.producto.value.alt!, // Texto alternativo para la imagen
        stock: this.producto.value.stock!, // Stock del producto
        ruta: '' // Ruta vacía, probablemente utilizada más tarde para almacenar la ruta de la imagen en Storage
      }



      // Llama a la función crearProducto del servicio CrudService para agregar el nuevo producto
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => { // Si la creación es exitosa, ejecuta la función dentro del 'then'
          // Muestra una notificación con SweetAlert indicando que el producto fue agregado exitosamente
          Swal.fire({
            title: "Bien!", // Título del mensaje
            text: "Ha agregado un producto con éxito", // Mensaje de éxito
            icon: "success" // Icono de éxito (una marca de verificación verde)
          });
        })
        .catch(error => { // Si ocurre un error en la creación del producto, ejecuta la función dentro del 'catch'
          // Muestra una notificación con SweetAlert indicando que hubo un error al agregar el producto
          Swal.fire({
            icon: "error", // Icono de error (un círculo rojo con una X blanca)
            title: "Uhh...", // Título del mensaje
            text: "Hubo un problema al agregar un nuevo producto" // Mensaje de error
          });
        });
    }
  }

  // Función que maneja el proceso de eliminación de un producto
  mostrarBorrar(productoSeleccionado: Producto) {
    // Establece la variable para mostrar el modal de confirmación de eliminación
    this.modalVisibleProducto = true;

    // Guarda el producto seleccionado para que se pueda acceder a sus datos más adelante
    this.productoSeleccionado = productoSeleccionado;

    // Muestra una alerta de confirmación usando SweetAlert
    Swal.fire({
      title: "Está seguro?", // Título de la alerta
      icon: "warning", // Icono de advertencia (amarillo con un signo de exclamación)
      showCancelButton: true, // Muestra un botón de "Cancelar"
      confirmButtonColor: "#3085d6", // Color del botón de confirmación (azul)
      cancelButtonColor: "#d33", // Color del botón de cancelación (rojo)
      confirmButtonText: "Si, borrar" // Texto del botón de confirmación
    }).then((result) => { // Después de la interacción del usuario con la alerta
      if (result.isConfirmed) { // Si el usuario confirma que desea borrar el producto
        // Llama al servicio CRUD para eliminar el producto de la base de datos
        this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto);

        // Muestra una alerta informando que el producto ha sido borrado exitosamente
        Swal.fire({
          title: "Borrado!", // Título de la alerta de éxito
          text: "Se ha borrado correctamente", // Mensaje de éxito
          icon: "success" // Icono de éxito (una marca de verificación verde)
        });
      }
    });
  }

  // Función para eliminar definitivamente al producto
  borrarProducto() {
    // Llama al servicio 'eliminarProducto' pasando el ID del producto seleccionado para eliminarlo de la base de datos
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
      .then(respuesta => { // Si la eliminación es exitosa
        // Muestra una notificación de éxito con SweetAlert
        Swal.fire({
          title: "Bien!", // Título de la alerta de éxito
          text: "Se ha eliminado correctamente", // Mensaje de éxito
          icon: "success" // Icono de éxito (marca de verificación verde)
        });
      })
      .catch(error => { // Si ocurre un error en la eliminación
        // Muestra un mensaje de error usando una alerta estándar
        alert("No se ha podido eliminar el producto \n" + error); // Muestra el error detallado
      })
  }
  // Función para seleccionar el producto a editar
  mostrarEditar(productoSeleccionado: Producto) {
    // Asigna el producto seleccionado a la variable 'productoSeleccionado'
    this.productoSeleccionado = productoSeleccionado;

    // Enviar o "setear" los nuevos valores en el formulario para editar
    // El ID no se vuelve a enviar ni se modifica, por lo que no se incluye en la asignación
    this.producto.setValue({
      nombre: productoSeleccionado.nombre, // Asigna el nombre del producto seleccionado al formulario
      precio: productoSeleccionado.precio, // Asigna el precio del producto seleccionado
      descripcion: productoSeleccionado.descripcion, // Asigna la descripción del producto
      categoria: productoSeleccionado.categoria, // Asigna la categoría del producto
      imagen: productoSeleccionado.imagen, // Asigna la imagen del producto
      alt: productoSeleccionado.alt, // Asigna el texto alternativo de la imagen
      stock: productoSeleccionado.stock // Asigna la cantidad de stock del producto
    });
  }

  // Función para editar un producto existente
  editarProducto() {
    // Se crea un objeto 'datos' con la información del producto a modificar
    let datos: Producto = {
      idProducto: this.productoSeleccionado.idProducto, // El ID se mantiene igual para identificar el producto
      nombre: this.producto.value.nombre!, // Se toma el nuevo valor del nombre del producto desde el formulario
      precio: this.producto.value.precio!, // Se toma el nuevo precio desde el formulario
      descripcion: this.producto.value.descripcion!, // Se toma la nueva descripción del producto
      categoria: this.producto.value.categoria!, // Se toma la nueva categoría del producto
      imagen: this.producto.value.imagen!, // Se toma la nueva URL de la imagen del formulario
      alt: this.producto.value.alt!, // Se toma el nuevo texto alternativo de la imagen
      stock: this.producto.value.stock!, // Se toma el nuevo valor de stock
      ruta: '' // Se deja vacío, ya que no se utiliza en esta función
    }

    // Llama al servicio para modificar el producto en la base de datos
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
      .then(producto => {
        // Si la modificación es exitosa, muestra un mensaje de éxito
        Swal.fire({
          title: "Bien!",
          text: "Se ha modificado el producto con éxito",
          icon: "success"
        });
      })
      .catch(error => {
        // Si ocurre un error, muestra un mensaje de error
        Swal.fire({
          title: "Uhh",
          text: "Hubo un problema al modificar el producto",
          icon: "error"
        });
      });
  }
}