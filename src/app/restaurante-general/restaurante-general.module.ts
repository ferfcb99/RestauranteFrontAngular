import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposComponent } from './tipos/tipos.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudPlatilloComponent } from './crud-platillo/crud-platillo.component';



@NgModule({
  declarations: [
    TiposComponent,
    RestaurantesComponent,
    PlatillosComponent,
    CrudPlatilloComponent
  ],
  exports: [
    TiposComponent,
    RestaurantesComponent,
    PlatillosComponent,
    CrudPlatilloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RestauranteGeneralModule { }
