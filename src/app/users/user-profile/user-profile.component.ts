import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Authentication/auth.service';
// import { user } from 'src/app/models/users.models';
import { user, UserserviceService } from 'src/app/store/Makenew/userservice.service';
import { SessionServiceService } from 'src/app/store/sessionStore/storage-service.service';
import { usersStore } from 'src/app/store/users.store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [usersStore]
})
export class UserProfileComponent implements OnInit {
  userEditedForm: FormGroup;

  constructor(private auther: AuthService, private router: Router, 
    private userStr: usersStore, private storeSer: SessionServiceService, 
    private http: HttpClient, 
    private newStoreSer:UserserviceService) 
    {

  }
  userinfo: any;
  usersstore$ = this.userStr.users$;

  test: any;
  public newusers$:Observable<user[]>
  ngOnInit(): void {
    this.userinfo = JSON.parse(sessionStorage.getItem('SigninData'));
    var coin: number = this.userinfo.coin
    this.userinfo.coin = coin.toFixed(2)
    this.userEditedForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'phone': new FormControl(null),
      'address': new FormControl(null),
    })

    this.newusers$=this.newStoreSer.getusersfromstore()
    console.log(this.newusers$)
    this.newusers$.subscribe((usr)=>console.log(usr))



  }

  toggleText = "Edit";
  toggleUserDetailOrEditStatus = true
  toggleUserDetailOrEdit() {
    this.toggleUserDetailOrEditStatus = !this.toggleUserDetailOrEditStatus;
    if (this.toggleUserDetailOrEditStatus) {
      this.toggleText = "Edit";
    }
    else {
      this.toggleText = "Details";
    }
  }

  OnSubmit() {
    var allInfoOfTheUser: any;
    allInfoOfTheUser = this.userEditedForm.value
    allInfoOfTheUser.Id = this.userinfo.Id
    allInfoOfTheUser.Password = this.userinfo.Password
    allInfoOfTheUser.coin = this.userinfo.coin
    console.log(allInfoOfTheUser)
    sessionStorage.setItem("EditedData", JSON.stringify(allInfoOfTheUser))
    console.log(sessionStorage.getItem("EditedData"))
    this.userinfo = allInfoOfTheUser
    sessionStorage.setItem("editedUsersInfo", JSON.stringify(allInfoOfTheUser))
    this.storeSer.SessionStorageSet(allInfoOfTheUser)
    this.auther.UserEdit(this.userinfo.Id, allInfoOfTheUser).subscribe(x => {
      alert('Account Updated successfully!');
      this.toggleUserDetailOrEdit();
    }, (error) => {
      console.log(error);
      alert('Can not Update! Server Issue!');
    })









  }

}
