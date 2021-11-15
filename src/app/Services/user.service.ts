import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { User } from '../Interfaces/User';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private request: HttpClient) { }

  //get user
  getUser():Observable<{}>{
    return this.request.get<{}>(``);
  }

  //add user
  addUser(user: User):Observable<{}>{
    return this.request.post<{}>(``, user);
  }


  //get user by id
  getUserById(id: string):Observable<{}>{
    return this.request.get<{}>(`/${id}`);
  }
}
