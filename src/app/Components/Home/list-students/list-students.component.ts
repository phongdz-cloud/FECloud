
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  class: string = "";

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(response => {
      console.log(response);
    })
  }


  getClass (event: any){
    console.log(event.target);
    this.class = event.target.value;
  }

}
