import { IfStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { confirmedValidator } from '../models/passMatch';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpform: FormGroup;
  constructor(private Authser: AuthService, private router: Router,) {

  }

  ngOnInit(): void {
    this.signUpform = new FormGroup({
      'SenddatatoBackend': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required),
        'username': new FormControl(null, Validators.required),
      }),

      'tempPass': new FormControl(null, [Validators.required]),
    });
  }



  OnSubmit() {
    if (this.signUpform.get('tempPass').value == this.signUpform.get('SenddatatoBackend.password').value) {
      if (this.signUpform.valid && this.signUpform.get('SenddatatoBackend').valid) {
        this.Authser.userSignUp(this.signUpform.get('SenddatatoBackend').value).subscribe(x => {
          console.log(x);
          alert('Account Created successfully!');
          this.router.navigate(['/users']);
        }, (error) => {
          console.log(error);
          alert('Wrong Credential');
        })
        console.log(this.signUpform.get('SenddatatoBackend').value);
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


  signup(data: any) {

    this.Authser.userSignUp(data).subscribe(x => {
      console.log(x);
      alert('Account Created successfully!');
      this.router.navigate(['/users']);
    }, (error) => {
      console.log(error);
      alert('Wrong Credential');
    })

  }


}
