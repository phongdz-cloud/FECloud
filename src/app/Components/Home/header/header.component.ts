import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: String = '';
  role: String = '';
  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.sharedService.getNameOfAccount().subscribe(response => {
      this.username = response.firstName + ' ' + response.middleName + ' ' + response.lastName ;
      this.role = response.role;
    })
  }

  logoutAccount(){
    localStorage.removeItem('key');
    this.router.navigate(['auth/login']);
  }

}
