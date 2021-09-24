import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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
  flags : any;
  imgPregunta : any;
  pais : any;

  arrPregunta1 : string[] = ['Paises', 
                            '¿De qué país es esta bandera?',
                            'Angola',
                            'Colombia',
                            'Argentina',
                            'Arabia Saudita',
                            '2'];

  arrPregunta2 : string[] = ['Paises',
                            '¿Cuanta es la población de Angola?',
                            '20.000.000',
                            '40.000.000',
                            '35.000.000',
                            '31.000.000',
                            '4'];

  arrPregunta3 : string[] = ['Paises',
                            '¿Cual es la principal religion en Nepal?',
                            'Islam',
                            'Catolicismo',
                            'Hinduismo',
                            'Budismo',
                            '3'];

  arrPregunta4: string[] = ['Paises',
                            '¿Quien es el actual presidente de Turquia?',
                            'Mirtha Legrand',
                            'Recep Tayyip Erdoğan',
                            'Abdullah Gül',
                            'Ahmet Necdet Sezer',
                            '2'];

  arrPregunta5: string[] = ['Paises',
                            '¿Cual es la marca de autos mas vendida en Estados Unidos?',
                            'Toyota',
                            'Ford',
                            'Chevrolet',
                            'Honda',
                            '1'];

  constructor(private utilidades : UtilidadesService, private api : ApiService) { 
    this.api.getFlags().subscribe((flags : any) =>{
      this.flags = flags;
      console.log(this.flags)
    });
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.armarPregunta();
    },2000);
    
  }

  armarPregunta(){

    switch (this.contador){
      case 1:
          this.pais = this.flags[0];
          this.imgPregunta = this.pais.flags[1];
          this.titulo = this.arrPregunta1[0];
          this.pregunta = this.arrPregunta1[1];
          this.opcion1 = this.arrPregunta1[2];
          this.opcion2 = this.arrPregunta1[3];
          this.opcion3 = this.arrPregunta1[4];
          this.opcion4 = this.arrPregunta1[5];
          this.respuestaCorrecta = parseInt(this.arrPregunta1[6]);
        break;
      case 2: 
          this.pais = this.flags[1];
          this.imgPregunta = this.pais.flags[1];
          this.titulo = this.arrPregunta2[0];
          this.pregunta = this.arrPregunta2[1];
          this.opcion1 = this.arrPregunta2[2];
          this.opcion2 = this.arrPregunta2[3];
          this.opcion3 = this.arrPregunta2[4];
          this.opcion4 = this.arrPregunta2[5];
          this.respuestaCorrecta = parseInt(this.arrPregunta2[6]);
        break;
      case 3: 
          this.pais = this.flags[2];
          this.imgPregunta = this.pais.flags[1];
          this.titulo = this.arrPregunta3[0];
          this.pregunta = this.arrPregunta3[1];
          this.opcion1 = this.arrPregunta3[2];
          this.opcion2 = this.arrPregunta3[3];
          this.opcion3 = this.arrPregunta3[4];
          this.opcion4 = this.arrPregunta3[5];
          this.respuestaCorrecta = parseInt(this.arrPregunta3[6]);
        break;
      case 4: 
          this.pais = this.flags[3];
          this.imgPregunta = this.pais.flags[1];
          this.titulo = this.arrPregunta4[0];
          this.pregunta = this.arrPregunta4[1];
          this.opcion1 = this.arrPregunta4[2];
          this.opcion2 = this.arrPregunta4[3];
          this.opcion3 = this.arrPregunta4[4];
          this.opcion4 = this.arrPregunta4[5];
          this.respuestaCorrecta = parseInt(this.arrPregunta4[6]);
        break;
      case 5: 
          this.pais = this.flags[4];
          this.imgPregunta = this.pais.flags[1];
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
