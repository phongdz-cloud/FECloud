
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

  deleteStudent(id: string){
    this.studentService.deleteStudent(id).subscribe(response => {
      this.checkRemove= response;
      this.router.navigate(['home/admin/list-students']).then(() => {
        window.location.reload();
      })
      /* if (this.checkRemove == "Delete") */
      console.log(response);

    })

  }

}
