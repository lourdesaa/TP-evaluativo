import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabialesComponent } from './labiales/labiales.component';
import { OjosComponent } from './ojos/ojos.component';
import { RostroComponent } from './rostro/rostro.component';
import { UnasComponent } from './unas/unas.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    LabialesComponent,
    OjosComponent,
    RostroComponent,
    UnasComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
