import { Component, OnInit } from '@angular/core';
import { datoSalida } from 'src/app/models/datos-salida';
import { RegistrosService } from 'src/app/servicios/registros.service';
import { CalculoTiempoService } from 'src/app/servicios/calculo-tiempo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario-salida',
  templateUrl: './formulario-salida.component.html',
  styleUrls: ['./formulario-salida.component.css']
})
export class FormularioSalidaComponent implements OnInit {

  datoSalida:datoSalida={
      placa: '',
      hora: new Date().toLocaleTimeString(),
      tiempoParqueo: 0,
      valorServicio: 0
    }

    datoPlaca: any = [];

  constructor(private servicioHttp: RegistrosService, private calculoTiempo: CalculoTiempoService, private router:Router) { }

  ngOnInit(): void {
  }

  consultaRegistrosalida(){
    this.servicioHttp.consultaRegistroSalida(this.datoSalida.placa).subscribe(
      res => {

            if(res){
              this.datoPlaca = res;
              this.datoSalida.tiempoParqueo = this.calculoTiempo.calculoParqueo(this.datoPlaca.ingreso, this.datoSalida.hora);
              this.datoSalida.valorServicio = this.datoSalida.tiempoParqueo * this.datoPlaca.valor_min;
              console.log(this.datoSalida)
              this.registrarSalida();
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este vehiculo no se encuentra en parqueo, confirma la placa!'
              })
            }
        }
    )
  }

  registrarSalida(){
    Swal.fire({
      title: '¿Deseas darle salida al vehiculo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioHttp.salidaVehiculo(this.datoSalida.placa,this.datoSalida).subscribe(res =>{

          this.router.navigate(['/app-estacionamiento/registro']);

        });
      }
    })
  }

}
