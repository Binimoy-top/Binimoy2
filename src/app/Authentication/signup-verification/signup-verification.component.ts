import { Component, OnInit } from '@angular/core'; 
import { AuthService } from '../auth.service';
import emailjs from '@emailjs/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-verification',
  templateUrl: './signup-verification.component.html',
  styleUrls: ['./signup-verification.component.css']
})
export class SignupVerificationComponent implements OnInit {

  constructor(private AuthSer:AuthService,private router: Router) { 
   
  }
  email_frm_local_strg:string;
  username_frm_local_strg:string;
  model:any={};
  Userdata:any;
  


  
  UserData:any;
  ngOnInit(): void {
    this.UserData =JSON.parse(sessionStorage.getItem('SignupData'));
    this.email_frm_local_strg=this.UserData.email;
    this.username_frm_local_strg=this.UserData.username;
    console.log(this.email_frm_local_strg);
    
    

  }


// send email confirmation button
private randomOtpGen:any;
  codesent=false;
  sendCode() {
    this.codesent=true;
    this.timer(2);
    this.randomOtpGen=this.generateRandomNumber();

     // sending a mail
    var templateParams = {
      from_name: 'Binimoy',
      to_name: this.username_frm_local_strg,
      reply_to: this.email_frm_local_strg,
      message:  'Your code is - ' + this.randomOtpGen,
  };
  
  emailjs.send('service_dqu20fi','template_9dm2up6', templateParams, '6EhohHmJreRN--9ba')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);

    }, function(err) {
      console.log('FAILED...', err);
    });
    
  }
 // the code got from email has written in the input then submitted.
  CodeValueSubmited(data:any){
    if(this.randomOtpGen==data.getotp){
      console.log(this.UserData);
  
      this.AuthSer.userSignUp(this.UserData).subscribe(x => {
        alert('Account Created successfully! Please Login!');
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
        alert('Wrong Credential');
      })
      this.UserData=null;
    }
    else{
      alert('Please Re-check your code has been sent to your email Address!')
    }
    // console.log(this.model.randomOtpGen);
  }

//code generate to send
  generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random()*(maxm-minm+1))+minm;
  }

  //timer for sending code to the email 
  codeSendBtn_status=true;
  display: any;
  timer(minute:any) {
    this.codeSendBtn_status=false;
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        this.codeSendBtn_status=true;
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
  }





}
