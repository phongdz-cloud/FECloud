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


const appRoutes: Routes = [
  {path: 'auth', component: AuthLandingComponent,
   children: [{path: 'login', component: LoginComponent}, {path: 'register', component: RegisterComponent}]
  },
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent,children:[
    {path: 'myInfo',component: MyInfoComponent},
    {path: 'myCourses', component: CoursesComponent},
    {path: 'course', component: CourseComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'admin', component: AdminComponent, children: [
      {path: 'mainPage', component: MainPageComponent},
      {path: 'insertStudent', component: AddStudentComponent},
      {path: 'list-students', component: ListStudentsComponent}
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}), BrowserAnimationsModule, MatIconModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
