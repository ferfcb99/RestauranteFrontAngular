import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposComponent } from './tipos/tipos.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RestauranteGeneralModule { }
