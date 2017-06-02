import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ChatComponent }  from '../components/chat.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ ChatComponent ],
  bootstrap:    [ ChatComponent ]
})
export class ChatModule { }
