import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardLabialesComponent } from './card-labiales/card-labiales.component';
import { CardOjosComponent } from './card-ojos/card-ojos.component';
import { CardRostroComponent } from './card-rostro/card-rostro.component';
import { CardUnasComponent } from './card-unas/card-unas.component';



@NgModule({
  declarations: [
    CardComponent,
    CardLabialesComponent,
    CardOjosComponent,
    CardRostroComponent,
    CardUnasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
