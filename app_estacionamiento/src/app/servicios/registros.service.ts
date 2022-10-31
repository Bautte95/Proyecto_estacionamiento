import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Datos } from '../models/datos';
import { datoSalida } from '../models/datos-salida';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  ingresarRegistro(registro:Datos){
    return this.http.post(`${this.API_URI}/app-estacionamiento`, registro)
  }

  consultaRegistros(){
    return this.http.get(`${this.API_URI}/app-estacionamiento/registro`);
  }

  consultaRegistroSalida(placa:string){
    return this.http.get(`${this.API_URI}/app-estacionamiento/formulario-salida/${placa}`);
  }

  salidaVehiculo(placa:string, datos:datoSalida){
    return this.http.put(`${this.API_URI}/app-estacionamiento/formulario-salida/${placa}`, datos);
  }
}
