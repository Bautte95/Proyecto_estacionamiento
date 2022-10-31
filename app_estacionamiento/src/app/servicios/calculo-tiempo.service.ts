import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoTiempoService {


  constructor() { }

  calculoParqueo(ingreso:any, salida:any){

    let horaIngreso = ingreso;
    let horaSalida = salida;

    if(ingreso.slice(1,2) == ':'){
      horaIngreso = '0' + ingreso;
    }

    if(salida.slice(1,2) == ':'){
      horaSalida = '0' + salida
    }

    const minutosDia = 24*60;
    const minutosIngreso = (horaIngreso.slice(0,2)*60) + parseInt(horaIngreso.slice(3,5));
    const minutosSalida = (horaSalida.slice(0,2)*60) + parseInt(horaSalida.slice(3,5));

    let tiempo = 0;

    if(minutosIngreso>minutosSalida){
        tiempo = (minutosDia-minutosIngreso)+ minutosSalida;
    }else{
        tiempo = minutosSalida-minutosIngreso;
    }

    return tiempo;

  }
}
