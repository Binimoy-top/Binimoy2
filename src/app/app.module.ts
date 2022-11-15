import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './Layouts/auth-layout/auth-layout.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Layouts/header/header.component';
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
