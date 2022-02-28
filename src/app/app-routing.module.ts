import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatillosComponent } from './restaurante-general/platillos/platillos.component';
import { RestaurantesComponent } from './restaurante-general/restaurantes/restaurantes.component';
import { TiposComponent } from './restaurante-general/tipos/tipos.component';

const routes: Routes = [
  { path: "", component: PlatillosComponent },
  { path: "tipos", component: TiposComponent },
  { path: "restaurantes", component: RestaurantesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
