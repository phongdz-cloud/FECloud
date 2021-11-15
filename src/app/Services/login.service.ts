import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {account} from '../Interfaces/Account'
import {Response} from '../Interfaces/Response';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private request: HttpClient) { }

  loginAccount(info: account):Observable<Response>{
    console.log(info);
    console.log(JSON.stringify(info));
    return this.request.post<Response>('/api', JSON.stringify(info));
  }
}
