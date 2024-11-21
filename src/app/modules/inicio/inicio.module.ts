import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InicioRoutingModule } from './inicio-routing.module';

// VISTA - PÁGINA - INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

// COMPONENTES QUE IMPORTAMOS DESDE MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { OjosComponent } from '../producto/pages/ojos/ojos.component';
import { RostroComponent } from '../producto/pages/rostro/rostro.component';
import { UnasComponent } from '../producto/pages/unas/unas.component';
import { LabialesComponent } from '../producto/pages/labiales/labiales.component';
import { CardDestacadosComponent } from './components/card-destacados/card-destacados.component';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CardDestacadosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    InicioComponent,
    CardComponent
  ]
})
export class InicioModule { }