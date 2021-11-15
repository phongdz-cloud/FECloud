import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor() { }

  public Editor = ClassicEditor;

  file: string = '';
  fileName: string = '';
  image: any;
  urlImage:any;

  ngOnInit(): void {
  }
  

  upThumnail(event:any){
    this.file = event.target.files[0];
    this.fileName = event.target.files[0].name;
    this.image = this.file;

    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.urlImage = reader.result;
    }
  }
  
}
