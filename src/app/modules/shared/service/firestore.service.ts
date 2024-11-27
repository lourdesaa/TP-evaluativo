import { Injectable } from '@angular/core';
// Importamos Firestore y colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario'; // Importamos el modelo de Usuario

@Injectable({
  providedIn: 'root' 
})
export class FirestoreService {

  private usuariosCollection: AngularFirestoreCollection<Usuario>;

  constructor(private database: AngularFirestore) {
    // Inicializamos la colección de usuarios en Firestore
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  // Método para agregar un usuario a la colección en Firestore
  agregarUsuario(usuario: Usuario, id: string) {
    return new Promise(async (resolve, reject) => {
      //encapsula la lógica que se ejecuta si todo sale bien
      try {
        usuario.uid = id;
        /* documento en la colección de usuarios con el UID como ID.*/
        const resultado = await this.usuariosCollection.doc(id).set(usuario);
        resolve(resultado);
      } catch (error) {
        reject(error);
      }
    });
  }
}
