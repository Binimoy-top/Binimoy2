import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model:any={}
  constructor(private Authser:AuthService, private router:Router) { }

  ngOnInit(): void {
  this.model.username="";
  this.model.email="";

  this.model.password="";

  }
 signup(data:any){
  if(this.model.password1!=this.model.password2){
    alert("please use same password")

  }

    this.Authser.userSignUp(data).subscribe(x=>{
      console.log(x);
      alert('Account Created successfully!');
      this.router.navigate(['/users']);
    },(error) => {
      console.log(error);
      alert('Wrong Credential');
    })
  
  }

}
