import { CanActivateFn } from '@angular/router';

// Inyección de servicios necesarios para el guardián
import { inject } from '@angular/core';
import { AuthService } from '../modules/autentificacion/service/auth.service';
import { Router } from '@angular/router';

// Operadores de tipo OBSERVABLES de RxJS
import { map, switchMap, of, from } from 'rxjs';

/**
 * Guardián de rutas protegidas basado en roles.
 * Este guardián verifica si el usuario tiene permisos de acceso al recurso, dependiendo de su rol.
 * 
 * @param route - La ruta solicitada por el usuario.
 * @param state - El estado actual del router.
 * @returns Un observable que indica si el acceso está permitido o si se redirige al usuario.
 */
export const rutaProtegidaGuard: CanActivateFn = (route, state) => {
  // Inyectamos el servicio de autenticación
  const servicioAuth = inject(AuthService);

  // Inyectamos el servicio de navegación (Router)
  const servicioRutas = inject(Router);

  // Especificamos el rol esperado para esta ruta
  const rolEsperado = "admin";

  return from(servicioAuth.obtenerUid()).pipe(
    switchMap(uid => {
      if (uid) {
        // Si existe un UID, consultamos su rol
        return servicioAuth.obtenerRol(uid).pipe(
          map(rol => {
            if (rol === rolEsperado) {
              // El rol del usuario coincide con el esperado, permitimos el acceso
              console.log("Usuario verificado como administrador.");
              return true;
            } else {
              // El rol no coincide, denegamos el acceso
              console.log("Acceso denegado: Usuario no tiene rol de administrador.");
              return false;
            }
          })
        );
      } else {
        // Si no hay UID (usuario no autenticado o visitante), redirigimos a la página de inicio
        console.log("Usuario no validado. Permisos insuficientes.");
        return of(servicioRutas.createUrlTree(["/inicio"]));
      }
    })
  );
};
