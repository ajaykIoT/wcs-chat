import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { ChatModule } from './chat/modules/chat.module';

if (environment.production) {
  enableProdMode();
}



platformBrowserDynamic().bootstrapModule(ChatModule);
