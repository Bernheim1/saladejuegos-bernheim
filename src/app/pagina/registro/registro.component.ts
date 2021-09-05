import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UtilidadesService } from 'src/app/services/utilidades.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router : Router, private usuario : UserService, private utilidades : UtilidadesService) { }

  ngOnInit(): void {
  }

  registro(){
    this.usuario.registro(this.email, this.password)
    .then((respuesta : any) => {
        this.router.navigate(['/home']);
    })
    .catch((error) => {
      
      if(error.code == 'auth/invalid-email'){

        this.utilidades.mostrarToast('Email invalido', 'El email ingresado es invalido, por favor vuelva a ingresarlo!');

      }else if(error.code == 'auth/email-already-in-use'){

        this.utilidades.mostrarToast('Usuario ya registrado', 'El email ingresado ya esta en uso, por favor ingrese otro!');

      }
    });
  }

}
