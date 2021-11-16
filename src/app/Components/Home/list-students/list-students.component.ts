
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Services/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) { }

  class: string = "";

  allStudents: any = []

  message: string = ''

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(response => {
      this.allStudents = response
    })
  }


  checkRemove: any


  getClass (event: any){
    console.log(event.target);
    this.class = event.target.value;
  }

  async deleteStudent(id: string){
    await this.studentService.deleteStudent(id).subscribe(async (response) => {
      this.checkRemove = response;
      console.log(this.checkRemove)
      if (this.checkRemove){
        await this.studentService.getAllStudents().subscribe(async (response) => {
          this.allStudents = response
        })
      }

    })

  }

}
