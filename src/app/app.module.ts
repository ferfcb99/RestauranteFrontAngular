import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauranteGeneralModule } from './restaurante-general/restaurante-general.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestauranteGeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
