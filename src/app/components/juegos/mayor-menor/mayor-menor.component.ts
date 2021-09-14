import { Component, OnInit } from '@angular/core';

import { UtilidadesService } from 'src/app/services/utilidades.service';


@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {

  puntos : number = 0;
  numAnterior : number = 0;
  numSiguiente : number = 0;

  constructor(private utilidades : UtilidadesService) { }

  ngOnInit(): void {
    this.start();
  }

  start() {
    this.numSiguiente = Math.round(Math.random() * (10 - 1));
    this.puntos = 0;
    this.numAnterior = Math.round(Math.random() * (10 - 1));
  }

  seleccionadoMayor() {
    if(this.numSiguiente >= this.numAnterior){
      this.puntos++;
      this.numAnterior = this.numSiguiente;
      this.numSiguiente = Math.round(Math.random() * (10 - 1));
    }else{
      this.utilidades.mostrarToast('Perdiste!', 'El numero era menor! Volve a intentarlo!');
      this.start();
    }
  }

  seleccionadoMenor(){
    if(this.numSiguiente <= this.numAnterior){
      this.puntos++;
      this.numAnterior = this.numSiguiente;
      this.numSiguiente = Math.round(Math.random() * (10 - 1));
    }else{
      this.utilidades.mostrarToast('Perdiste!', 'El numero era mayor! Volve a intentarlo!');
      this.start();
    }
  }
}
