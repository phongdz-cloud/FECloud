import { Component, OnInit } from '@angular/core';
import {account} from '../../../Interfaces/Account'
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router, private sharedService: SharedService) { }

  info: account = {username: '', password: ''}
  targetName: String = '';

  onKey(event: any){

    this.targetName = event.target.name;
    if (this.targetName == "username")
      this.info.username = event.target.value;
    else
      this.info.password = event.target.value;
  }

  checkRadioBox(event: any){
    //this.info.role = event.target.value;
  }

  login(){

    this.loginService.loginAccount(this.info).subscribe(response => {
      console.log(response);
    },error => {console.log(error)});

  }

  ngOnInit(): void {
  }

}
