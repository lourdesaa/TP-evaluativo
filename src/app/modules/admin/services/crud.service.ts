import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

// Decorador que marca esta clase como un servicio inyectable.
// 'providedIn: root' indica que este servicio será proporcionado a toda la aplicación.
@Injectable({
  providedIn: 'root'
})
export class CrudService { // Declaración de la clase del servicio llamada "CrudService".
   // Declaración de una propiedad privada que representará la colección de productos en Firebase Firestore.
  // 'AngularFirestoreCollection<Producto>' es un tipo genérico que permite realizar operaciones CRUD sobre documentos del tipo "Producto".
  private productoCollection: AngularFirestoreCollection<Producto>

  // Constructor de la clase CrudService. Aquí se inyecta la dependencia 'AngularFirestore'.
  // 'database' permite interactuar con la base de datos de Firebase Firestore.
  constructor(private database: AngularFirestore) {
    // Inicializa la propiedad 'productoCollection' referenciando la colección llamada "producto" en Firestore.
    // Esta colección almacenará los documentos del tipo 'Producto'.
    //referenciamos collecion productos y sera subida como "Producto" a firebase
    this.productoCollection = database.collection('producto')
  }
  // Posibles preguntas en la defensa
  // ¿Qué hace el decorador @Injectable? Indica que esta clase es un servicio que puede ser inyectado en otros componentes o servicios. La configuración providedIn: 'root' asegura que el servicio esté disponible globalmente.
  // ¿Qué representa productoCollection? Es la referencia a la colección "producto" en Firebase Firestore, donde se almacenarán los documentos que representan productos.
  // ¿Qué hace el constructor? Inyecta el servicio AngularFirestore y usa este servicio para inicializar productoCollection, que apunta a la colección "producto" en Firestore
  // Método para crear un nuevo producto en la base de datos
  
crearProducto(producto: Producto) {
  // Retorna una promesa para manejar la tarea de forma asíncrona
  return new Promise(async (resolve, reject) => {
    try {
      // Genera un ID único para el producto
      const idProducto = this.database.createId();
      // Asigna el ID generado al producto
      producto.idProducto = idProducto;
      // Guarda el producto en la base de datos usando su ID como identificador
      const resultado = await this.productoCollection.doc(idProducto).set(producto);
      // Si todo sale bien, resuelve la promesa con el resultado
      resolve(resultado);
    } catch (error) {
      // Si hay un error, rechaza la promesa con el error
      reject(error);
    }
  });
}

// Método para obtener todos los productos de la colección "producto" en tiempo real
obtenerProducto() {
  // Devuelve un Observable que escucha los cambios en la colección "producto"
  return this.productoCollection.snapshotChanges().pipe(
    // Procesa los datos recibidos
    map(action => 
      // Itera sobre cada cambio y extrae únicamente los datos de los documentos
      action.map(a => a.payload.doc.data())
    )
  );
}
//Posibles preguntas en tu defensa:
// ¿Qué devuelve este método? R: Un Observable que emite un arreglo con los datos de los productos.
// ¿Qué hace snapshotChanges? R: Escucha cambios en la colección de Firestore en tiempo real y emite información sobre los documentos afectados.
// ¿Para qué sirve pipe y map? R: pipe permite transformar los datos emitidos. map extrae los datos (doc.data()) de los documentos para quedarnos solo con la información del producto.


// Método para editar un producto existente en la base de datos
modificarProducto(idProducto: string, nuevaData: Producto) {
  // Accede a la colección 'producto', busca el documento con el ID proporcionado y actualiza los datos
  return this.database.collection('producto').doc(idProducto).update(nuevaData);
}

// Método para eliminar un producto de la base de datos
eliminarProducto(idProducto: string) {
  // Retorna una promesa que maneja la eliminación del producto
  return new Promise((resolve, reject) => {
    try {
      // Elimina el documento del producto con el ID proporcionado
      const respuesta = this.productoCollection.doc(idProducto).delete();
      // Si la operación es exitosa, resuelve la promesa con la respuesta
      resolve(respuesta);
    } catch (error) {
      // Si ocurre un error, rechaza la promesa con el error
      reject(error);
    }
  });
}
}

function resolverPromesa(respuesta: Promise<void>) {
  // Se resuelve la promesa cuando se completa correctamente.
  respuesta.then(() => {
    console.log("Promesa resuelta correctamente");
  }).catch(error => {
    console.error("Error al resolver la promesa", error);
  });
}

