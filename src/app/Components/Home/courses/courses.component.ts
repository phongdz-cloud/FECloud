import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goCoursePage(){
    this.router.navigate(['home/course'])
  }

}
