import { Component } from '@angular/core';
import { MailService } from './services/mail.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MailService]
})
export class AppComponent {
  title = 'webdempo';
  public contactForm = this.fb.group({

    msg:' ',
    email:' ',
    nombre:' ',
    tlfno:' ',
    empresa:' ',
 }, {
 }

 );

  constructor(private _mailService: MailService,
    private fb: FormBuilder
    ) { }


  contact(msg:Text,email:string, nombre:string, tlfno:string, empresa:string){
   
    this._mailService.contact(msg,email, nombre, tlfno, empresa).subscribe(
      response => {
        if(response.status == 'success'){
        }
      },
      error =>{
        console.log(error);
      }
    );


  }

  send(){
    console.log("ENVIAR");
    console.log(this.contactForm.controls['email'].value.toString().trim());
    this.contact(
      this.contactForm.controls['msg'].value.toString().trim(),
      this.contactForm.controls['email'].value.toString().trim(),
      this.contactForm.controls['nombre'].value.toString().trim(),
      this.contactForm.controls['tlfno'].value.toString().trim(),
      this.contactForm.controls['empresa'].value.toString().trim())
  }

  
}
