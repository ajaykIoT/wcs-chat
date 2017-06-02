import { Component, OnInit } from '@angular/core';
import {WCSservice} from '../services/wcs.service';
import { ChatMessage } from '../models/chat-message';



@Component({
  selector: 'chatapp',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ WCSservice ]
})

export class ChatComponent implements OnInit {

  messages: ChatMessage[] = [];
  chatMessages: string = '';
  lastMessage: string = '';
  errorMessage: string = '';

  constructor(private wcsSvc: WCSservice) { }

  ngOnInit() {
    this.postMessage( this.lastMessage );
  }

  onSubmit(event: any) {
 //   this.chatMessages = this.chatMessages + 'You: ' + this.lastMessage;
    this.messages.push(new ChatMessage('user', this.lastMessage) );
    console.log(this.messages);

    this.postMessage( this.lastMessage );

    this.lastMessage = '';
  }

  postMessage(message: string) {
    this.wcsSvc.postMessage(this.lastMessage).subscribe(
                       replies  => this.parseResponses(replies, message),
                       error =>  this.errorMessage = <any>error);
  }

  parseResponses(replies: string[], lastMessage: string) {
   console.log('inside chat.component->parseResponse:--' + replies.toString);
    if ( lastMessage !== '') { this.messages.push(new ChatMessage('wcs', replies[1]));
  } else { this.messages.push(new ChatMessage('wcs', replies[0])) ;
}



    /*for ( let i = 0; i < replies.length; i++) {
      console.log('inside chat.component->parseResponse:--' + replies.toString);
        this.messages.push(new ChatMessage('wcs', replies[i]));
    }*/
  }

}



