import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//archivo de rutas
import { ProductoRoutingModule } from './producto-routing.module';

//vistas
import { LabialesComponent } from './pages/labiales/labiales.component';
import { RostroComponent } from './pages/rostro/rostro.component';
import { OjosComponent } from './pages/ojos/ojos.component';
import { UnasComponent } from './pages/unas/unas.component';
import { ProductoComponent } from './pages/producto/producto.component';

//componentes locales
import { CardLabialesComponent } from './component/card-labiales/card-labiales.component';
import { CardRostroComponent } from './component/card-rostro/card-rostro.component';
import { CardOjosComponent } from './component/card-ojos/card-ojos.component';
import { CardUnasComponent } from './component/card-unas/card-unas.component';
import { CardComponent } from '../inicio/components/card/card.component';

@NgModule({
  declarations: [
    LabialesComponent,
    RostroComponent,
    OjosComponent,
    UnasComponent,
    ProductoComponent,
    CardLabialesComponent,
    CardRostroComponent,
    CardOjosComponent,
    CardUnasComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports:[
    ProductoComponent,
    LabialesComponent,
    RostroComponent,
    OjosComponent,
    UnasComponent,
  ]
})
export class ProductoModule { }
