import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {
  isShowDivIf = false;  
  login=true;
  CustBtn="Login";

  constructor() { }

  ngOnInit(): void {
  }
  togglesignin_up() {  
    this.isShowDivIf = !this.isShowDivIf;  
    this.login=!this.login;
    if(this.login){
      this.CustBtn="Login";
    }
    else{
      this.CustBtn="Signup";
    }
  }  

}
