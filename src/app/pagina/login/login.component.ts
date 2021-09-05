import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UtilidadesService } from 'src/app/services/utilidades.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private router : Router, private usuario : UserService, private utilidades : UtilidadesService) {

  }

  ngOnInit(): void {
  }

  login() {

    this.usuario.login(this.email, this.password)
    .then((respuesta : any) => {
        let aux = this.email + ' - ' + this.password;
        this.usuario.enviarLog(Date.now(), aux)
        this.router.navigate(['home']);
    })
    .catch((error) => {
      
      if(error.code == 'auth/invalid-email'){

        this.utilidades.mostrarToast('Email invalido', 'El email ingresado es invalido, por favor vuelva a ingresarlo!');

      }else if(error.code == 'auth/user-not-found' || error.code === 'auth/wrong-password'){

        this.utilidades.mostrarToast('Credenciales Invalidas', 'Usuario o clave invalidos, vuelva a ingresar los datos');

      }
    });
  }

  loginUsuarioValido(){
    this.email = 'test@test.com';
    this.password = 'test123';
  }




}

