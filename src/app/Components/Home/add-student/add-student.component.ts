import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Interfaces/Student';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  date = new Date();

  /* student: Student = {firstName: '', middleName: '', lastName: '', bDate: '', phone: '', address: '', status: true, gmail: '',yearOfAdmisstion: this.date.getFullYear()} */

  ngOnInit(): void {

  }

  getInfor(event: any){
    var name = event.target.name;
    var value = event.target.value;
  }

}
