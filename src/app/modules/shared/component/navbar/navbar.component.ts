import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/service/auth.service'; // Importa el servicio de autenticación
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento para redirigir al usuario

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueado = true; // Variable booleana que controla si los botones de "Registrar" o "Iniciar sesión" se deben mostrar
  deslogueado = false; // Variable booleana que controla si el botón "Cerrar sesión" se debe mostrar

  constructor(
    public servicioAuth: AuthService, // Servicio de autenticación
    public servicioRutas: Router // Servicio de enrutamiento
  ) { }

  // Función que cambia los valores de las variables "logueado" y "deslogueado" cuando el usuario se ha logueado
  iniciar() {
    this.logueado = false; // Oculta los botones de "Registrar" e "Iniciar sesión"
    this.deslogueado = true; // Muestra el botón "Cerrar sesión"
  }

  // Función que se llama cuando el usuario cierra sesión
  cerrarSesion() {
    this.deslogueado = false; // Oculta el botón "Cerrar sesión"
    this.servicioAuth.cerrarSesion(); // Llama al servicio de autenticación para cerrar la sesión (eliminando el token)

    this.servicioRutas.navigate(['/']); // Redirige al usuario a la página de inicio (raíz del sitio)
    this.logueado = true; // Muestra los botones de "Registrar" e "Iniciar sesión" nuevamente
  }
}
