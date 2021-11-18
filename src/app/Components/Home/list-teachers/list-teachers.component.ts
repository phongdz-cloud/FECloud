import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {

  constructor(private teacherService: TeacherService) { }

  inforListTeachers: any = [];

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(response => {
      this.inforListTeachers = response;
    })
  }

  check: any = {success: false}

  deleteTeacher(id: string){
    this.teacherService.deleteTeacher(id).subscribe(response => {
      this.check = response;
      if (this.check.success)
      {
        this.teacherService.getAllTeachers().subscribe(response => {
          this.inforListTeachers = response
        })
      }
    })
  }

}
