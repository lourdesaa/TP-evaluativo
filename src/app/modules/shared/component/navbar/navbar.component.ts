import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/service/auth.service'; // Importa el servicio de autenticación
import { Router } from '@angular/router'; // Importa el servicio de enrutamiento para redirigir al usuario

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueado = true;
  deslogueado = false;

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) { }

  iniciar() {
    this.logueado = false;
    this.deslogueado = true;
  }

  cerrarSesion() {
    this.deslogueado = false;
    this.servicioAuth.cerrarSesion();

    this.servicioRutas.navigate(['/']);
    this.logueado = true;
  }
}
