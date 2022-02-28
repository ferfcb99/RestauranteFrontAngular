import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposComponent } from './tipos/tipos.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PlatillosComponent } from './platillos/platillos.component';



@NgModule({
  declarations: [
    TiposComponent,
    RestaurantesComponent,
    PlatillosComponent
  ],
  exports: [
    TiposComponent,
    RestaurantesComponent,
    PlatillosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RestauranteGeneralModule { }
