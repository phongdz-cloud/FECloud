import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Interfaces/Student';
import { User } from 'src/app/Interfaces/User';
import { StudentService } from 'src/app/Services/student.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService: StudentService, private userService: UserService) { }

  fakeDate: string = 'T14:05:15.953'

  date = new Date();
  
  user: User = {username: '', password: ''}

  student: Student = {firstName: '', middleName: '', lastName: '', bDate: '', address: '', phone: '', userId: ''}
  /* student: Student = {firstName: '', middleName: '', lastName: '', bDate: '', phone: '', address: '', status: true, gmail: '',yearOfAdmisstion: this.date.getFullYear()} */

  message: string = '';

  ngOnInit(): void {

  }

  getDate(event:any){
    this.student.bDate = event.target.value
  }

  getInfor(event: any){
    var name = event.target.name;
    var value = event.target.value;
    if (name == "fName")
      this.student.firstName = value;
    else if (name == "mName")
      this.student.middleName = value;
    else if (name == "lName")
      this.student.lastName = value;
    else if (name == "address")
      this.student.address = value;
    else if (name == "phone")
      this.student.phone = value;

  }


  infoResponseUser: any = {id: ''}

  async addStudent(){
    this.user.username = this.student.lastName;
    this.user.password = "123";
    this.student.bDate = this.student.bDate + this.fakeDate;
    console.log(this.user);
    await this.userService.addUser(this.user).subscribe(async (response) => {
      this.infoResponseUser = response;
      this.student.userId = this.infoResponseUser.id;
      console.log(this.student.userId);
      await this.studentService.addStudent(this.student).subscribe(response => {
        this.infoResponseUser = response;
        if (this.infoResponseUser.id)
          this.message = "Thêm Sinh Viên Thành Công"
        else 
          this.message = "Thêm Sinh Viên Không Thành Công"
        setTimeout(() => {
          this.message = ''
        }, 5000)
      })
    })
/*     this.student.userId = "354a18a7-2280-4dad-9cf2-be2aac9bce8d"
    console.log(this.student);
    this.studentService.addStudent(this.student).subscribe(response => {
      console.log(response);
    }) */
  }

  

}
