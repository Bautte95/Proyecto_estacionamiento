import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { ListaRegistroComponent } from './componentes/lista-registro/lista-registro.component';
import { FormularioSalidaComponent } from './componentes/formulario-salida/formulario-salida.component';


const routes: Routes = [
  {path:'',redirectTo:'/app-estacionamiento/registro', pathMatch: 'full'},
  {path:'app-estacionamiento/formulario-ingreso',component: FormularioRegistroComponent},
  {path:'app-estacionamiento/formulario-salida',component: FormularioSalidaComponent},
  {path:'app-estacionamiento/registro',component:ListaRegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
