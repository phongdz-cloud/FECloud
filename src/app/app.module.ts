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

const appRoutes: Routes = [
  {path: 'auth', component: AuthLandingComponent,
   children: [{path: 'login', component: LoginComponent}, {path: 'register', component: RegisterComponent}]
  },
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthLandingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}), BrowserAnimationsModule, MatIconModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
