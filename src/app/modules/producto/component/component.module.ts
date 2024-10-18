import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../inicio/components/card/card.component';
import { CardLabialesComponent } from './card-labiales/card-labiales.component';
import { CardOjosComponent } from './card-ojos/card-ojos.component';
import { CardRostroComponent } from './card-rostro/card-rostro.component';
import { CardUnasComponent } from './card-unas/card-unas.component';

@NgModule({
  declarations: [

    CardLabialesComponent,
    CardOjosComponent,
    CardRostroComponent,
    CardUnasComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
