import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LabialesComponent } from './pages/labiales/labiales.component';
import { RostroComponent } from './pages/rostro/rostro.component';
import { OjosComponent } from './pages/ojos/ojos.component';
import { UnasComponent } from './pages/unas/unas.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"labiales",component:LabialesComponent
  },
  {
    path:"rostro",component:RostroComponent
  },
  {
    path:"ojos",component:OjosComponent
  },
  {
    path:"uñas",component:UnasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
