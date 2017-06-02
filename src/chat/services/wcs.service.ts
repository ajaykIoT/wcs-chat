import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WCSservice {

 private url: string = 'https://car-data-management.mybluemix.net/conversation';
 constructor(private http: Http) {}

  postMessage(msg: string) {
     let headers = new Headers({'Content-Type': 'text/plain'});
     let body =  'msg.payload:' + msg ;
     return this.http.post(this.url, body, headers).map((res: Response) =>  this.parseMsgText(res));
  }

  parseMsgText(massage: any): string[] {
    let responseBody: any = JSON.parse(massage._body);
    let answers = responseBody.output.text;
    console.log('inside wcs.service => parseMsgText-- ' + JSON.stringify(answers));
    return answers;
  }
}
