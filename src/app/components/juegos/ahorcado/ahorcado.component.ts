import { Component, OnInit } from '@angular/core';

import { UtilidadesService } from 'src/app/services/utilidades.service';
@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  intentos : number = 6; 
  longitudPalabra : string[] = [];
  palabras : string[] = ['hola', 'programacion', 'tortuga'];
  palabra : string = '';
  imagen : number = 0;
  jugando : boolean = false;

  constructor(private utilidades : UtilidadesService) { }

  ngOnInit(): void {
    this.start();
  }

  start(){

    this.intentos = 6;
    this.imagen = 0;
    this.palabra = this.palabras[Math.round(Math.random() * (this.palabras.length - 1))];
    this.longitudPalabra = Array(this.palabra.length).fill('_');
    this.jugando = true;

  }

  letraSeleccionada(letra : string){
    if(this.jugando){
      let flag : boolean = false;
      for(let i = 0; i < this.palabra.length; i++){
        if(letra.toLowerCase() == this.palabra[i]){
          this.longitudPalabra[i] = letra;
          flag = true;
        }
      }
  
      if(!flag){
        this.intentos--;
        if(this.intentos == 0){
          this.imagen++;
          this.stop();
        }else{
          this.imagen++;
        }
      }
    }
  }

  stop(){
    this.jugando = false;
    setTimeout(() =>{
      this.utilidades.mostrarToast('Perdiste!', 'Te quedaste sin intentos! La palabra volvio a cambiar!');
      this.start();
    }, 1000);

  }
}