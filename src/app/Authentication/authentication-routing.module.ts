import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupVerificationComponent } from './signup-verification/signup-verification.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },

  // auth_in layout 
  // {
  //   path: 'signup-verification',
  //   component: SignupVerificationComponent

  // },
  // {
  //   path: 'signin',
  //   component: SigninComponent,
  // },
  // {
  //   path: 'signup',
  //   component: SignupComponent,
  // },


  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
      {
        path: 'signup-verification',
        component: SignupVerificationComponent

      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'forgotpassword',
        component: ForgotpasswordComponent,
      },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
