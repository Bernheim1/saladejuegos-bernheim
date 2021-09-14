import { Component, OnInit } from '@angular/core';

import { ChatService } from 'src/app/services/chat.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  items : Observable<any[]>;
  mensaje : string = '';

  constructor(private chat : ChatService, public user : UserService) { 
    this.items = this.chat.items;
  }

  enviarMensaje(){
    this.chat.enviarMensaje(this.mensaje, this.user.currentUser)
    console.log(this.user.currentUser);
  }

  ngOnInit(): void {
  }
}
