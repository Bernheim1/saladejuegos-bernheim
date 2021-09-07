import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { UtilidadesService } from 'src/app/services/utilidades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public usuario : UserService, private utilidades : UtilidadesService) { }

  ngOnInit(): void {
  }

  singOut(){
    this.usuario.singOut();
  }
}
