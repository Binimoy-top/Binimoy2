import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { datastorage } from 'src/app/store/lclientstorage';
import { SessionServiceService } from 'src/app/store/sessionStore/storage-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinform:FormGroup;

  constructor(private login_ser:AuthService,private router:Router,private sesseionser:SessionServiceService) { }
signinClicked:boolean
  ngOnInit(): void {
   
    this.signinform = new FormGroup({
     'password': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
    });
    this.signinClicked=false

  }

  OnSubmit(){
    this.signinClicked=true
    this.login_ser.UserLogin(this.signinform.value).subscribe(x=>{
      // console.log(x.Users);
      this.router.navigate(['/users']);
      this.sesseionser.SessionStorageSet(x.Users)
      localStorage.setItem("token",x.token)

    },(error) => {
      console.log(error);
      alert('Wrong Credential');
      this.signinClicked=false
    })
   
    
  }
}
