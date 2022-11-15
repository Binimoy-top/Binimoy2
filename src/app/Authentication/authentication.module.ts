import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import { SignupVerificationComponent } from './signup-verification/signup-verification.component';
import { Page404Component } from './page404/page404.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthLayoutComponent,
    SignupVerificationComponent,
    Page404Component,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
