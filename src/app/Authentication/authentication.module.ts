import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { SignupVerificationComponent } from './signup-verification/signup-verification.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthLayoutComponent,
    SignupVerificationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

 
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
