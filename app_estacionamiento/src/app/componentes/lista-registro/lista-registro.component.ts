import { Component, OnInit } from '@angular/core';
import { RegistrosService } from 'src/app/servicios/registros.service';

@Component({
  selector: 'app-lista-registro',
  templateUrl: './lista-registro.component.html',
  styleUrls: ['./lista-registro.component.css']
})
export class ListaRegistroComponent implements OnInit {

  datos:any = [];

  constructor(private servicioHttp: RegistrosService) { }

  ngOnInit(): void {
    this.servicioHttp.consultaRegistros().subscribe(
      {
        next: res => {
          this.datos = res;
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

  mostrarServicios(){

  }

}
