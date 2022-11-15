import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private http: HttpClient, private auther: AuthService, private router: Router) { }
  email: string;
  sendOtpBtnActive: boolean;
  model: any = {};
  userinfo: any;

  ngOnInit(): void {
    this.sendOtpBtnActive = true
  }

  // let map = new Map<string, string>();
  // map.set(n.email,n.Id); 
  // console.log(map.get(this.email))
  // console.log(map.has(this.email))

  sendOtpCode() {
    this.auther.UsersList().subscribe((res: any) => {
      console.log(res)
      for (let Everyuser of res) {
        if (this.email == Everyuser.email) {
          this.userinfo = Everyuser;
        }
      }
      if (this.userinfo != null && this.sendOtpBtnActive) {
        this.sendOtpBtnActive = false;
        this.sendCode2email()
      }
      else {
        alert('User not registered')
      }
    })
    
  }

  // send email confirmation button
  codesent = false;
  private randomOtpGen: any;
  sendCode2email() {
    this.codesent = true;
    this.timer(2);
    this.randomOtpGen = this.generateRandomNumber();

    // sending a mail
    var templateParams = {
      from_name: 'Binimoy',
      to_name: this.userinfo.username,
      reply_to: this.email,
      message: 'Your code is - ' + this.randomOtpGen,
    };

    emailjs.send('service_dqu20fi', 'template_9dm2up6', templateParams, '6EhohHmJreRN--9ba')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent. please check your email!')

      }, function (err) {
        console.log('FAILED...', err);
      });

  }


  //code generate to send
  generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  }

  //timer for sending code to the email 
  codeSendBtn_status = false;
  display: any;
  timer(minute: any) {
    this.codeSendBtn_status = true;
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
        this.codeSendBtn_status = false;
        this.Submited = false
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
  }

  Submited: boolean = false;

  OnSubmit(data: any) {
              // from the template we can get value 2 ways using ngmodel 
              // console.log(this.model.RandomOtpInput) -- dynamic binding
              // console.log(data.OtpInput)--------------- from the template
    this.Submited = true
    if (data.password == data.password2 && this.model.RandomOtpInput == this.randomOtpGen) {
      this.userinfo.Password = this.model.password
      // updating data in the server 
      this.auther.UserEdit(this.userinfo.Id, this.userinfo).subscribe(x => {
        alert('Account Updated successfully!');
        this.router.navigate(['/']);
      }, (error) => {
        console.log(error);
        alert('Can not Update! Server Issue!');
      })

    }
    else {
      alert("Password and Confirmed Password does not match!")
    }
  }


}
