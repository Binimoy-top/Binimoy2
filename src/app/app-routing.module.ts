import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,

    children: [
      { path: '', redirectTo: '/Authentication/auth', pathMatch: 'full' }
    ]
  },
  {
    path: 'Authentication',
    // component: AuthLayoutComponent,
    loadChildren: () =>
      import('./Authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'users',
    // component: AuthLayoutComponent,
    loadChildren: () =>
      import('./users/users.module').then(
        (m) => m.UsersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
