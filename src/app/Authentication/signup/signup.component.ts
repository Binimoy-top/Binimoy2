
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { X_OK } from 'constants';
import { tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpform: FormGroup;
  constructor(private Authser: AuthService, private router: Router,private http:HttpClient) {

  }

  users:any;

  ngOnInit(): void {
    this.signUpform = new FormGroup({
      'SenddatatoBackend': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required),
        'username': new FormControl(null, Validators.required),
      
      }/*,{validators: this.custVal('email')}*/), 
      
      'tempPass': new FormControl(null, [Validators.required]),
    });
  this.getUsers();
}

getUsers(){
  this.http.get('https://localhost:44339/api/users').subscribe((res:any)=>{
    (this.users=res)

})
}

        /* Example of custom validators*/

  /* private custVal(controlNameA:string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const Formgrp=control as FormGroup;
      const valueofControlA=Formgrp.get(controlNameA)?.value
      if (true) {
        console.log(valueofControlA)
        return null
      }
      else {
        return { Emailavailable: true }
      }
    }
  } */



  OnSubmit() {
    if (this.signUpform.get('tempPass').value == this.signUpform.get('SenddatatoBackend.password').value) {
      if (this.signUpform.valid && this.signUpform.get('SenddatatoBackend').valid) {
        // this.Authser.userSignUp(this.signUpform.get('SenddatatoBackend').value).subscribe(x => {
        //   console.log(x);
        //   alert('Account Created successfully!');
        //   this.router.navigate(['/users']);
        //   sessionStorage.setItem('key','value');
        // }, (error) => {
        //   console.log(error);
        //   alert('Wrong Credential');
        // })
        // console.log(this.signUpform.get('SenddatatoBackend').value);
        sessionStorage.setItem('SignupData', JSON.stringify(this.signUpform.get('SenddatatoBackend').value));
        console.log(JSON.parse(sessionStorage.getItem('SignupData')));
        this.router.navigateByUrl('/Authentication/auth/signup-verification');

      }
      else {
        alert("please re-check!")
      }
    }

    else {
      alert("please re-check!")
    }
    // console.log(this.signUpform);
  }
}
