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
      console.log(response)
      this.inforListTeachers = response;
    })
  }

  deleteTeacher(id: string){
    this.teacherService.deleteTeacher(id).subscribe(response => {
      console.log(response);
    })
  }

}
