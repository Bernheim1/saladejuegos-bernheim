import { Component, OnInit } from '@angular/core';

import { UtilidadesService } from 'src/app/services/utilidades.service';
@Component({
  selector: 'app-juegopropio',
  templateUrl: './juegopropio.component.html',
  styleUrls: ['./juegopropio.component.css']
})
export class JuegopropioComponent implements OnInit {

  ArribaIzquierda : boolean = false;
  ArribaDerecha : boolean = false;
  AbajoIzquierda : boolean = false;
  AbajoDerecha : boolean = false;
  puntaje : number = 0;
  random : number = 0;
  tiempo : number = 4000;
  timer : any;

  constructor(private utilidades : UtilidadesService) { }

  ngOnInit(): void {
  }

  start(){

    this.random = this.randomNum();

    switch(this.random) {
      case 0:
        this.ArribaIzquierda = true;
        this.timer = setTimeout(() =>{
          this.stop('perdio');
        }, this.tiempo);
        break;
      case 1: 
        this.ArribaDerecha = true;
        this.timer = setTimeout(() =>{
          this.stop('perdio');
        }, this.tiempo);
        break;
      case 2: 
        this.AbajoIzquierda = true;
        this.timer = setTimeout(() =>{
          this.stop('perdio');
        }, this.tiempo);
        break;
      case 3: 
        this.AbajoDerecha = true;
        this.timer = setTimeout(() =>{
          this.stop('perdio');
        }, this.tiempo);
        break;
    }

  }

  stop(opcion : string){

    switch(opcion){
      case 'perdio':
        this.utilidades.mostrarToast('Perdiste!', 'No llegaste a apretar el boton que cambio de color!')
        this.puntaje = 0;
        this.ArribaIzquierda = false;
        this.ArribaDerecha = false;
        this.AbajoIzquierda = false;
        this.AbajoDerecha = false;
        this.tiempo = 4000;
        break;
      case 'gano':
        break;
    }
  }

  click(opcion : number){

    switch(opcion){
      case 0:
        if(this.ArribaIzquierda){
          clearTimeout(this.timer);
          this.ArribaIzquierda = false;
          this.puntaje++;
          this.tiempo = this.tiempo - 300;
          this.start();
        }
        break;
      case 1: 
        if(this.ArribaDerecha){
          clearTimeout(this.timer);
          this.ArribaDerecha = false;
          this.puntaje++;
          this.tiempo = this.tiempo - 300;
          this.start();
        }
        break;
      case 2: 
        if(this.AbajoIzquierda){
          clearTimeout(this.timer);
          this.AbajoIzquierda = false;
          this.puntaje++;
          this.tiempo = this.tiempo - 300;
          this.start();
        }
        break;
      case 3: 
        if(this.AbajoDerecha){
          clearTimeout(this.timer);
          this.AbajoDerecha = false;
          this.puntaje++;
          this.tiempo = this.tiempo - 300;
          this.start();
        }
        break;
    }
  }


  randomNum(){
    return Math.round(Math.random() * (4 - 1));
  }



}
