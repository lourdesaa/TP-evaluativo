import { Injectable } from '@angular/core';
// Importamos el servicio de AUTENTIFICACIÓN de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

// Importamos el servicio para manejar COLECCIONES de Firebase Firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

// Importamos Observable de RxJS para manejar flujos de datos reactivos
import { Observable } from 'rxjs';

// Importamos el operador 'map' para transformar los datos que se obtienen de Firestore
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  // Este servicio estará disponible en toda la aplicación
})
export class AuthService {
  // Propiedad privada para manejar el rol del usuario
  private rolUsuario: string | null = null;

  // Constructor donde se inyectan los servicios de autenticación y Firestore
  constructor(
    private auth: AngularFireAuth,  // Servicio de autenticación de Firebase
    private servicioFirestore: AngularFirestore  // Servicio para interactuar con Firestore
  ) { }

  // Función para REGISTRAR un usuario
  registrar(email: string, password: string) {
    // Llama al método de Firebase para crear un usuario con email y contraseña
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // Función para INICIAR SESIÓN
  iniciarSesion(email: string, password: string) {
    // Llama al método de Firebase para iniciar sesión con el email y la contraseña
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Función para CERRAR SESIÓN
  cerrarSesion() {
    // Llama al método de Firebase para cerrar la sesión del usuario
    return this.auth.signOut();
  }

  // Función para obtener el UID del usuario actual
  async obtenerUid() {
    // Obtener la información del usuario actual
    const user = await this.auth.currentUser;

    /*
      Si el usuario no está autenticado o hubo un error en la autenticación,
      se retorna null.
    */
    if(user == null){
      return null;
    } else {
      return user.uid;  // Si el usuario está autenticado, se retorna su UID
    }
  }

  // Función para buscar un usuario en la colección 'usuarios' de Firestore
  obtenerUsuario(email: string) {
    // Busca el documento en Firestore donde el email del usuario coincide con el proporcionado
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }

  // Función para obtener el rol de un usuario a partir de su UID
  obtenerRol(uid: string): Observable <string | null> {
    /*
      Retorna un observable que se suscribe a los cambios en la colección 'usuarios',
      buscando por el UID del usuario. Si el usuario tiene un rol, lo devuelve, de lo contrario
      devuelve null.
    */
    return this.servicioFirestore.collection('usuarios').doc(uid).valueChanges()
      .pipe(map((usuario: any) => usuario ? usuario.rol : null));
  }

  // Función para almacenar el rol del usuario en la propiedad privada 'rolUsuario'
  enviarRolUsuario(rol: string) {
    this.rolUsuario = rol;
  }

  // Función para obtener el rol del usuario desde la propiedad privada 'rolUsuario'
  obtenerRolUsuario(): string | null {
    return this.rolUsuario;  // Retorna el rol almacenado o null si no se ha asignado un rol
  }
}
