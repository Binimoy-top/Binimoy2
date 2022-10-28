import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  login=true;
  sign_up_verification_processing=true;
  CustBtn="Go To Sign UP";

  constructor() { }

  ngOnInit(): void {
    

  }
  togglesignin_up() {  
    this.login=!this.login;
    if(this.login){
      this.CustBtn="Go To Sign Up";
    }
    else{
      this.CustBtn="Go To Login";
    }
  }  
  togglesign_up_ver(){
    this.sign_up_verification_processing=!this.sign_up_verification_processing;

  }

}
