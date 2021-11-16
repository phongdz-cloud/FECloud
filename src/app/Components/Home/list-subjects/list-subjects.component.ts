import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/Services/subject.service';
@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.css']
})
export class ListSubjectsComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  infoResponse: any = []

  ngOnInit(): void {
    this.subjectService.getAllSubject().subscribe(response => {
      this.infoResponse = response;
    })
  }



}
