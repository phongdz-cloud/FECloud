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

const appRoutes: Routes = [
  {path: 'auth', component: AuthLandingComponent,
   children: [{path: 'login', component: LoginComponent}, {path: 'register', component: RegisterComponent}]
  },
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent,children:[
    {path: 'mainPage', component: MainPageComponent},
    {path: 'myInfo',component: MyInfoComponent},
    {path: 'myCourses', component: CoursesComponent},
    {path: 'course', component: CourseComponent}
  ]},
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
    ContentCourseComponent
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
