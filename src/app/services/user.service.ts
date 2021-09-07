import { Injectable } from '@angular/core';

import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { forEachLeadingCommentRange } from 'typescript';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: string = '';

  constructor(private firesotre : AngularFirestore, private auth : AngularFireAuth, private router : Router) { }

  login(email : any, password : any){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  enviarLog(fecha : any, usuario : any){
    return this.firesotre.collection('logUsuarios').add({
      fecha: fecha,
      usuario: usuario
    }).then((respuesta) => {
      console.log("Log de ingreso guardado: ", respuesta.id);
    }).catch((error) => {
      console.error("Error guardando el log: ", error);
  });
  }

  registro(email : any, password : any){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  singOut() {
    this.auth.signOut()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch((e) => {
      console.log(e);
    })
  }
}
