import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/models/datos';
import { RegistrosService } from 'src/app/servicios/registros.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {


  registro: Datos = {
    placa: '',
    tipo_vehiculo: '',
    ingreso: new Date().toLocaleTimeString(),
    estado: 'En parqueo'
  }

  constructor(private servicioHttp: RegistrosService, private router:Router) { }

  ngOnInit(): void {
  }

  registrarIngreso(){
    Swal.fire({
      title: '¿Deseas registrar este vehiculo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, cancelar!',
      confirmButtonText: 'Sí, Registrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioHttp.ingresarRegistro(this.registro).subscribe(
          res => {
              if(res){
                Swal.fire(
                  'Registrado con éxito!'
                )
                this.router.navigate(['/app-estacionamiento/registro']);
              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Ha ocurrido un error, intenta nuevamente'
                })
              }
            }
        )
      }
    })
  }
}
