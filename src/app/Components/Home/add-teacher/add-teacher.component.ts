import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/Interfaces/Teacher';
import { User } from 'src/app/Interfaces/User';
import { UserService } from 'src/app/Services/user.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(private userService: UserService, private teacherService: TeacherService) { }

  teacher: Teacher = {firstName: '', middleName: '', lastName: '', phone: '', address: '', status: 1, gmail: '', userId: ''}

  user: User = {username: '', password:'123'}

  infoResponseUser: any = {id: ''}

  ngOnInit(): void {
  }


  getInfor(event: any){
    const name = event.target.name;
    const value = event.target.value;
    if (name == "fName")
      this.teacher.firstName = value;
    else if (name == "mName")
      this.teacher.middleName = value
    else if (name == "lName")
      this.teacher.lastName = value;
    else if (name == "address")
      this.teacher.address = value;
    else if (name == "gmail")
      this.teacher.gmail = value;
    else if (name == "phone")
      this.teacher.phone = value
  }



  async addTeacher(){
    this.user.username = this.teacher.lastName;
    console.log(this.user);
    console.log(this.teacher)

    await this.userService.addUser(this.user).subscribe(async(response) => {
      this.infoResponseUser = response;
      this.teacher.userId = this.infoResponseUser.id;
      await this.teacherService.addTeacher(this.teacher).subscribe(response => {
        console.log(response);
      })
    })
  }

}
