import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-verification',
  templateUrl: './signup-verification.component.html',
  styleUrls: ['./signup-verification.component.css']
})
export class SignupVerificationComponent implements OnInit {

  constructor() { }
  model:any;


  ngOnInit(): void {
    this.model=JSON.parse(sessionStorage.getItem('SignupData'));
    console.log(this.model);
  }



}
