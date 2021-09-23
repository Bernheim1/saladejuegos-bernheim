import { Component, OnInit } from '@angular/core';

import { UtilidadesService } from 'src/app/services/utilidades.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  titulo : string = '';
  pregunta : string = '';
  opcion1 : string = '';
  opcion2 : string = '';
  opcion3 : string = '';
  opcion4 : string = '';
  contador : number = 1;
  respuestaCorrecta : number = 0;

  arrPregunta1 : string[] = ['Historia', 
                            '¿Cuál de estas acciones es considerada un pecado según la Biblia?',
                            'Cometer adulterio',
                            'Todas las respuestas',
                            'Mentir',
                            'Matar',
                            '2'];

  arrPregunta2 : string[] = ['Geografía',
                            '¿Villa Gessel es parde de la costa de qué país?',
                            'Bolivia',
                            'Brasil',
                            'Chile',
                            'Argentina',
                            '4'];

  arrPregunta3 : string[] = ['Arte',
                            '¿Cómo es el dicho: "El que se fue a la villa.."?',
                            'Se calló a la carrilla',
                            'Lo vio a la Brayan',
                            'Perdio su silla',
                            'Tomó pastillas',
                            '3'];

  arrPregunta4: string[] = ['Historia',
                            '¿Cuándo se produjo el desembarco inglés en 1982, durante la guerra de Malvinas?',
                            '14 de junio',
                            '21 de mayo',
                            '2 de abril',
                            '1 de mayo',
                            '2'];

  arrPregunta5: string[] = ['Deporte',
                            '¿Cuantos pasos se pueden dar en Handball sin que ser falta?',
                            '3',
                            '2',
                            '4',
                            'Más de 4',
                            '1'];

  constructor(private utilidades : UtilidadesService) { }

  ngOnInit(): void {
    this.armarPregunta();
  }

  armarPregunta(){

    switch (this.contador){
      case 1:
          this.titulo = this.arrPregunta1[0];
          this.pregunta = this.arrPregunta1[1];
          this.opcion1 = this.arrPregunta1[2];
          this.opcion2 = this.arrPregunta1[3];
          this.opcion3 = this.arrPregunta1[4];
          this.opcion4 = this.arrPregunta1[5];
          this.respuestaCorrecta = parseInt(this.arrPregunta1[6]);
        break;
      case 2: 
          this.titulo = this.arrPregunta2[0];
          this.pregunta = this.arrPregunta2[1];
          this.opcion1 = this.arrPregunta2[2];
          this.opcion2 = this.arrPregunta2[3];
          this.opcion3 = this.arrPregunta2[4];
          this.opcion4 = this.arrPregunta2[5];
          this.respuestaCorrecta = parseInt(this.arrPregunta2[6]);
        break;
      case 3: 
          this.titulo = this.arrPregunta3[0];
          this.pregunta = this.arrPregunta3[1];
          this.opcion1 = this.arrPregunta3[2];
          this.opcion2 = this.arrPregunta3[3];
          this.opcion3 = this.arrPregunta3[4];
          this.opcion4 = this.arrPregunta3[5];
          this.respuestaCorrecta = parseInt(this.arrPregunta3[6]);
        break;
      case 4: 
          this.titulo = this.arrPregunta4[0];
          this.pregunta = this.arrPregunta4[1];
          this.opcion1 = this.arrPregunta4[2];
          this.opcion2 = this.arrPregunta4[3];
          this.opcion3 = this.arrPregunta4[4];
          this.opcion4 = this.arrPregunta4[5];
          this.respuestaCorrecta = parseInt(this.arrPregunta4[6]);
        break;
      case 5: 
          this.titulo = this.arrPregunta5[0];
          this.pregunta = this.arrPregunta5[1];
          this.opcion1 = this.arrPregunta5[2];
          this.opcion2 = this.arrPregunta5[3];
          this.opcion3 = this.arrPregunta5[4];
          this.opcion4 = this.arrPregunta5[5];
          this.respuestaCorrecta = parseInt(this.arrPregunta5[6]);
        break;
      case 6: 
          this.win();
        break;
    }
  }

  validarRespuesta(opcion : number){

    if(opcion == this.respuestaCorrecta){
            
      this.contador++;
      this.armarPregunta();
    }else{
      this.stop();
    }
  }

  win(){
    this.contador = 1;
    this.armarPregunta();
    this.utilidades.mostrarToastSuccess('Ganaste!', 'Felicitaciones!');
  }

  stop(){
    this.contador = 1;
    this.armarPregunta();
    this.utilidades.mostrarToast('Perdiste!', 'Volves a empezar!');
  }

}
