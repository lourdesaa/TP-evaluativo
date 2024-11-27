import { Injectable } from '@angular/core';
// Importamos Firestore y colecciones de la misma para interactuar con la base de datos
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario'; // Importamos el modelo de Usuario

@Injectable({
  providedIn: 'root' // Esto asegura que el servicio se provea a nivel global (root)
})
export class FirestoreService {

  /**
   * Definimos una colección de usuarios privada.
   * Va a ser una colección de Firestore.
   * Esta colección va a respetar la estructura de datos de la interfaz Usuario.
   */
  private usuariosCollection: AngularFirestoreCollection<Usuario>;

  // El constructor inyecta el servicio AngularFirestore para interactuar con Firestore
  constructor(private database: AngularFirestore) {
    // Inicializamos la colección de usuarios en Firestore
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  // Método para agregar un usuario a la colección en Firestore
  agregarUsuario(usuario: Usuario, id: string) {
    /* Generamos una nueva promesa que utiliza los métodos:
      - RESOLVE: promesa resuelta -> funciona correctamente
      - REJECT: promesa rechaza -> ocurrió una falla
    */
    return new Promise(async (resolve, reject) => {
      // Bloque TRY encapsula la lógica que se ejecuta si todo sale bien
      try {
        // Asignamos el UID (identificador único) al usuario
        usuario.uid = id;

        /**
         * Creamos un documento en la colección de usuarios con el UID como ID.
         * Usamos el método .set() para ingresar los datos del usuario en Firestore.
         */
        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        
        // Si la operación es exitosa, resolvemos la promesa con el resultado
        resolve(resultado);

      // Bloque CATCH encapsula el error que podría ocurrir durante el proceso
      } catch (error) {
        // Si ocurre un error, rechazamos la promesa y pasamos el error
        reject(error);
      }
    });
  }
}
