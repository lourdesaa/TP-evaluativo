import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';

// Definimos el conjunto de rutas de la aplicación
const routes: Routes = [
  // Ruta de inicio, mapea la ruta raíz a un solo componente (InicioComponent)
  {
    path: "", component: InicioComponent
  },
  
  // Carga el módulo 'InicioModule' cuando se accede a la ruta vacía
  {
    path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  
  // Carga el módulo de autenticación ('AutentificacionModule') al acceder a la ruta vacía
  {
    path: "", loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule)
  },

  // Carga el módulo de productos ('ProductoModule') al acceder a la ruta vacía
  {
    path: "", loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule)
  },

  // Ruta protegida para el módulo 'AdminModule', con un guardia que valida el rol 'admin'
  {
    path: "", loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [rutaProtegidaGuard],  // El guard 'rutaProtegidaGuard' verifica la autorización
    data: { role: 'admin' }  // Solo los usuarios con el rol 'admin' pueden acceder
  },

  // Carga el módulo del carrito ('CarritoModule') al acceder a la ruta vacía
  {
    path: "", loadChildren: () => import('./modules/carrito/carrito.module').then(m => m.CarritoModule)
  },

  // Carga el módulo de información ('InfoModule') al acceder a la ruta vacía
  {
    path: "", loadChildren: () => import('./modules/info/info.module').then(m => m.InfoModule)
  }
];

// Declaramos el módulo de rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configuración de las rutas principales de la aplicación
  exports: [RouterModule]  // Exportamos el módulo para que pueda ser usado en otros módulos
})
export class AppRoutingModule { }  // Módulo que se importa en el módulo raíz
