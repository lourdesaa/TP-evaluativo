import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';  // Importamos el modelo de Usuario
import { AuthService } from '../../service/auth.service';  // Servicio para la autenticación
import { FirestoreService } from 'src/app/modules/shared/service/firestore.service';  // Servicio para interactuar con Firestore
import { Router } from '@angular/router';  // Servicio para manejar la navegación en Angular
import * as CryptoJS from 'crypto-js';  // Paquete para encriptación
import Swal from 'sweetalert2';  // Paquete para mostrar alertas personalizadas

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;  // Esta propiedad controla la visibilidad de la contraseña en el formulario de registro

  // Inicializamos el objeto 'usuarios' con los campos necesarios para el registro
  usuarios: Usuario = {
    uid: '',       // UID será asignado después de crear el usuario en Firebase
    nombre: '',    // Nombre del usuario
    apellido: '',  // Apellido del usuario
    email: '',     // Email del usuario
    rol: 'usuario', // Rol del usuario (por defecto es 'usuario')
    password: ''   // Contraseña del usuario
  }

  coleccionUsuarios: Usuario[] = [];  // Colección para almacenar usuarios (no utilizada en este componente)

  // Constructor que inyecta los servicios necesarios en el componente
  constructor(
    public servicioAuth: AuthService,  // Servicio de autenticación
    public servicioFirestore: FirestoreService,  // Servicio para interactuar con Firestore
    public servicioRutas: Router  // Servicio de navegación en Angular
  ) {}

  // Función asincrónica para registrar al usuario
  async registrar() {
    // Obtenemos las credenciales del formulario
    const credenciales = {
      email: this.usuarios.email,  // Email proporcionado por el usuario
      password: this.usuarios.password  // Contraseña proporcionada por el usuario
    }

    // Llamada al servicio de autenticación para registrar al usuario en Firebase
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
      .then(res => {
        // Si el registro es exitoso, mostramos un mensaje de éxito
        Swal.fire({
          title: "¡Buen trabajo!",
          text: "¡Se pudo registrar con éxito! :)",
          icon: "success"
        });

        // Navegamos a la página de inicio después del registro exitoso
        this.servicioRutas.navigate(['/inicio']);
      })
      .catch(error => {
        // Si ocurre un error, mostramos un mensaje de error
        Swal.fire({
          title: "¡Oh no!",
          text: "Hubo un problema al registrar el nuevo usuario :(",
          icon: "error"
        });
      });

    // Obtenemos el UID (identificador único) del usuario desde el servicio de autenticación
    const uid = await this.servicioAuth.obtenerUid();
    this.usuarios.uid = uid;  // Asignamos el UID al objeto 'usuarios'

    // Encriptamos la contraseña del usuario usando SHA-256 antes de almacenarla en Firestore
    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();

    // Llamamos a la función para guardar el usuario en Firestore
    this.guardarUsuario();

    // Limpiamos los campos del formulario después de registrar al usuario
    this.limpiarInputs();
  }

  // Función para guardar el usuario en Firestore
  async guardarUsuario() {
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        // Imprimimos en consola los datos del usuario registrado
        console.log(this.usuarios);
      })
      .catch(err => {
        // Si ocurre un error al guardar, lo mostramos en consola
        console.log('Error =>', err);
      })
  }

  // Función para limpiar los campos del formulario
  limpiarInputs() {
    // Restablecemos los valores del objeto 'usuarios' a sus valores predeterminados
    const inputs = {
      uid: this.usuarios.uid = '',  // Limpiamos el UID
      nombre: this.usuarios.nombre = '',  // Limpiamos el nombre
      apellido: this.usuarios.apellido = '',  // Limpiamos el apellido
      email: this.usuarios.email = '',  // Limpiamos el email
      rol: this.usuarios.rol = 'vis',  // Limpiamos el rol (establecemos un rol por defecto)
      password: this.usuarios.password = ''  // Limpiamos la contraseña
    }
  }
}
