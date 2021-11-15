import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLandingComponent } from './Components/Auth/auth-landing/auth-landing.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Components/Home/home/home.component';
import { HeaderComponent } from './Components/Home/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { MainPageComponent } from './Components/Home/main-page/main-page.component';
import { MyInfoComponent } from './Components/Home/my-info/my-info.component';
import { CoursesComponent } from './Components/Home/courses/courses.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CourseComponent } from './Components/Home/course/course.component';
import { ContentCourseComponent } from './Components/Home/content-course/content-course.component';
import { AddStudentComponent } from './Components/Home/add-student/add-student.component';
import { AdminComponent } from './Components/Home/admin/admin.component';
import { AccessDeniedComponent } from './Components/Error/access-denied/access-denied.component';
import { NotFoundComponent } from './Components/Error/not-found/not-found.component';
import { DashboardComponent } from './Components/Home/dashboard/dashboard.component';
import { ListStudentsComponent } from './Components/Home/list-students/list-students.component';
import { AddCourseComponent } from './Components/Home/add-course/add-course.component';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './Components/Home/scheduler/scheduler.component';

const appRoutes: Routes = [
  {path: 'auth', component: AuthLandingComponent,
   children: [{path: 'login', component: LoginComponent}, {path: 'register', component: RegisterComponent}]
  },
  {path: '', redirectTo: 'home/dashboard', pathMatch:'full'},
  {path: 'home', component: HomeComponent,children:[
    {path: 'myInfo',component: MyInfoComponent},
    {path: 'myCourses', component: CoursesComponent},
    {path: 'course', component: CourseComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path:'scheduler', component:SchedulerComponent},
    {path: 'admin', component: AdminComponent, children: [
      {path: 'mainPage', component: MainPageComponent},
      {path: 'insertStudent', component: AddStudentComponent},
      {path: 'list-students', component: ListStudentsComponent},
      {path: 'add-course', component: AddCourseComponent}
    ]}
  ]},
  
  {path:'access-denied', component: AccessDeniedComponent},
  {path: 'not-found', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthLandingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    MainPageComponent,
    MyInfoComponent,
    CoursesComponent,
    CourseComponent,
    ContentCourseComponent,
    AddStudentComponent,
    AdminComponent,
    AccessDeniedComponent,
    NotFoundComponent,
    DashboardComponent,
    ListStudentsComponent,
    AddCourseComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    ScheduleModule,
    CKEditorModule,
    FlatpickrModule.forRoot(),
    NgbModalModule,
    FormsModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    RouterModule.forRoot(appRoutes, {enableTracing: true}), BrowserAnimationsModule, MatIconModule, MatButtonModule, CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
