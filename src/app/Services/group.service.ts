import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Group } from '../Interfaces/Group';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private request: HttpClient) { }

  //get all groups
  getAllGroups():Observable<{}>{
    return this.request.get<{}>(``);
  }

  //add group
  addGroup(group: Group):Observable<{}>{
    return this.request.post<{}>(``, group)
  }
}
