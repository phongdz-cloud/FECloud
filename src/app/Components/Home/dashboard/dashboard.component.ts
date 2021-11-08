import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  private daysArray = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

  private date = new Date();

  public hour: any;
  minute: string = '';
  second: string = '';
  public ampm: string = '';
  public day: string = '';


  dateShow: any;
  month: any;
  year: any;

  today: any;

  ngOnInit(): void {
    setInterval(() => {
      var date = new Date();
      this.updateDate(date);
    }, 1000)
  }


  updateDate(date: Date){
    const hours = date.getHours();
    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours%12;
    this.hour = this.hour ? this.hour:12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;


    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0'+ minutes : minutes.toString();


    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();

    this.dateShow = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    this.today = this.dateShow +'/' + this.month+ '/'+ this.year;
  }

}
