import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { SharedData } from '../Interfaces/SharedData';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: `Bearer ${localStorage.getItem('key')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private request: HttpClient) { }

  

  

  getNameOfAccount():Observable<SharedData>{
    return this.request.get<SharedData>('http://localhost:5000/account/getName', httpOptions);
  }



}
