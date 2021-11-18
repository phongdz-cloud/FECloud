import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/Interfaces/Subject';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  subject: Subject = {name: ''}


  getInfor(event: any){
    this.subject.name = event.target.value
  }


  addSubject(){
    this.subjectService.addSubject(this.subject).subscribe(response => {
      console.log(response)
    })
  }

}
