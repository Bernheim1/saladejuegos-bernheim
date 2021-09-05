import { Injectable } from '@angular/core';

import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { forEachLeadingCommentRange } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firesotre : AngularFirestore, private auth : AngularFireAuth) { }

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
}
