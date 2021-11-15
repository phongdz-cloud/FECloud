import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Student } from '../Interfaces/Student';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('learn')}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private request: HttpClient) {

   }
  
  //get all students
  getAllStudents():Observable<{}>{
    return this.request.get(``);
  }

  //add student
  addStudent(student: Student):Observable<{}>{
    return this.request.post<{}>(``,student);
  }


  //modify student
  editStudent(student: Student):Observable<{}>{
    return this.request.put<{}>(``, student)
  }


  //get student by id
  getStudentById(id: string):Observable<{}>{
    return this.request.get<{}>(`/${id}`);
  }


  //delete student by id
  deleteStudent(id: string):Observable<{}>{
    return this.request.delete<{}>(`/${id}`);
  }

  //get student by token
  getStudentByToken():Observable<{}>{
    return this.request.get<{}>(``, httpOptions)
  }


  
}
