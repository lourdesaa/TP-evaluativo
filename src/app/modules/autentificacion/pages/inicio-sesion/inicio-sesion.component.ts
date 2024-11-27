import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario'; // Importa la interfaz Usuario
import { AuthService } from '../../service/auth.service'; // Servicio de autenticación
import { FirestoreService } from 'src/app/modules/shared/service/firestore.service'; // Servicio de Firestore
import { Router } from '@angular/router'; // Servicio de enrutamiento para navegación
import * as CryptoJS from 'crypto-js'; // Biblioteca para encriptar contraseñas
import Swal from 'sweetalert2'; // Librería para mostrar alertas
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service'; // Servicio para el carrito de compras

@Component({
  selector: 'app-inicio-sesion', // Selector del componente
  templateUrl: './inicio-sesion.component.html', // Ruta de la plantilla HTML
  styleUrls: ['./inicio-sesion.component.css'] // Ruta de los estilos CSS
})
export class InicioSesionComponent {
  hide = true; // Controla la visibilidad de la contraseña en el formulario

  constructor(
    public servicioAuth: AuthService, // Inyecta el servicio de autenticación
    public servicioFirestore: FirestoreService, // Inyecta el servicio de Firestore
    public servicioRutas: Router, // Inyecta el servicio de rutas
    public servicioCarrito: CarritoService // Inyecta el servicio del carrito
  ) { }

  // Declara un objeto de tipo Usuario para almacenar los datos del usuario ingresado
  usuarioIngresado: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // Función para iniciar sesión
  async iniciarSesion() {
    // Obtenemos las credenciales del usuario desde el formulario
    const credenciales = {
      email: this.usuarioIngresado.email,
      password: this.usuarioIngresado.password
    }

    try {
      // Intenta obtener el usuario desde Firestore utilizando el email
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      // Si el usuario no existe en la base de datos, muestra un error
      if (!usuarioBD || usuarioBD.empty) {
        Swal.fire({
          text: "Correo electrónico no registrado",
          icon: "error"
        });
        this.limpiarInputs(); // Limpia los campos del formulario
        return;
      }

      // Obtiene el primer documento del usuario desde la consulta
      const usuarioDoc = usuarioBD.docs[0];

      // Extrae los datos del documento y los convierte en tipo 'Usuario'
      const usuarioData = usuarioDoc.data() as Usuario;

      // Hashea la contraseña ingresada para compararla con la almacenada en la base de datos
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      // Si la contraseña no coincide, muestra un error
      if (hashedPassword !== usuarioData.password) {
        Swal.fire({
          text: "Contraseña incorrecta",
          icon: "error"
        });

        this.usuarioIngresado.password = ''; // Limpia el campo de la contraseña
        return;
      }

      // Si las credenciales son correctas, se inicia la sesión
      const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
        .then(res => {
          // Muestra un mensaje de éxito al iniciar sesión
          Swal.fire({
            text: "¡Se ha logueado con éxito! :D",
            icon: "success"
          });

          // Almacena el rol del usuario en el servicio de autenticación
          this.servicioAuth.enviarRolUsuario(usuarioData.rol);

          // Redirecciona según el rol del usuario
          if (usuarioData.rol === "admin") {
            console.log("Inicio de sesión de usuario administrador");
            this.servicioRutas.navigate(['/admin']); // Redirige al panel de administración
          } else {
            console.log("Inicio de sesión de usuario visitante");
            this.servicioRutas.navigate(['/inicio']); // Redirige al inicio
            this.servicioCarrito.iniciarCart(); // Inicializa el carrito
          }
        })
        .catch(err => {
          // Si ocurre un error al iniciar sesión, muestra un mensaje de error
          Swal.fire({
            text: "Hubo un problema al iniciar sesión :(" + err,
            icon: "error"
          });

          this.limpiarInputs(); // Limpia los campos del formulario
        })
    } catch (error) {
      // Si hay un error en la obtención del usuario, limpia los campos del formulario
      this.limpiarInputs();
    }
  }

  // Función para limpiar los campos del formulario
  limpiarInputs() {
    // Establece los valores de los campos email y password a vacíos
    const inputs = {
      email: this.usuarioIngresado.email = '',
      password: this.usuarioIngresado.password = ''
    }
  }
}
