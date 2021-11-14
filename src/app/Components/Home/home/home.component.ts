import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
/*     if (!localStorage.getItem('learn'))
      this.router.navigate(['auth/login']);
    else 
      this.router.navigate(['home/dashboard']); */
  }

  tempTag: any;

  changeColor(event: any){
    (this.tempTag.target as HTMLInputElement).classList.remove('choose');
    this.tempTag = event;
    (event.target as HTMLInputElement).classList.add('choose');
  }

}
