
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor() { }

  class: string = "";

  ngOnInit(): void {
  }


  getClass (event: any){
    console.log(event.target);
    this.class = event.target.value;
  }

}
