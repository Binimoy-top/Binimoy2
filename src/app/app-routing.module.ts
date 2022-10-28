import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './Authentication/page404/page404.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';
import { AuthGGuard } from './shared/auth-g.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, //children will be in the router outlet of main component,
    canActivate: [AuthGGuard],
    children: [
      { path: '', redirectTo: '/Authentication/auth', pathMatch: 'full' },
      {
        path: 'users',
        canActivate: [AuthGGuard],
        loadChildren: () =>
          import('./users/users.module').then(
            (m) => m.UsersModule
          ),
      },

    ]
  },
  {
    path: 'boot',
    component: AuthLayoutComponent, //children will be in the router outlet of main component
    children: [
      // { path: '', redirectTo: '/Authentication/auth', pathMatch: 'full' },
      {
        path: 'auth_in_layout',
        loadChildren: () =>
          import('./Authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },

    ]
  },
  {
    path: 'Authentication',
    loadChildren: () =>
      import('./Authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },

  { path: '**', component: Page404Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
