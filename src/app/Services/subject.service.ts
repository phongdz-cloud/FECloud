import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Subject } from '../Interfaces/Subject';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private request: HttpClient) { }

  //get all subject
  getAllSubject():Observable<{}>{
    return this.request.get<{}>(`/subjectApi`);
  }

  //add subject
  addSubject(subject: Subject):Observable<{}>{
    return this.request.post<{}>(`/subjectApi`, subject);
  }
}
