import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, //children will be in the router outlet of main component
    children: [
      { path: '', redirectTo: '/Authentication/auth', pathMatch: 'full' },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then(
            (m) => m.UsersModule
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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
