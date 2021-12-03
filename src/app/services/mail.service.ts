import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _http: HttpClient) {

  }


  contact(msg:Text,email:string, nombre:string, tlfno:string, empresa:string):Observable<any>{

    let data={"nombre":nombre,"msg":msg,"email":email, "tlfno":tlfno, "empresa":empresa}
    let json = JSON.stringify(data);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    
    return this._http.post('https://pruebas.apialumbrado.dempo.es/api/email/send',params, {headers:headers});

  }
}