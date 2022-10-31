import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { ListaRegistroComponent } from './componentes/lista-registro/lista-registro.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormularioSalidaComponent } from './componentes/formulario-salida/formulario-salida.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    ListaRegistroComponent,
    NavegacionComponent,
    FormularioSalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
