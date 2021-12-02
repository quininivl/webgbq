import { Component } from '@angular/core';
import { MailService } from './services/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MailService]
})
export class AppComponent {
  title = 'webdempo';

  constructor(private _mailService: MailService
    ) { }


  contact(msg:Text,email:string, nombre:string, tlfno:string, empresa:string){
   
    this._mailService.contact(msg,email, nombre, tlfno, empresa).subscribe(
      response => {
        console.log(response);
        if(response.status == 'success'){
         console.log(response);
        }
      },
      error =>{
        console.log(error);
      }
    );


  }
}
