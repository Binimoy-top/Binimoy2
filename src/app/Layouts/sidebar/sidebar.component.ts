import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userInfo:any;
  Signindata =JSON.parse(sessionStorage.getItem('SigninData'))
  userEdited =JSON.parse(sessionStorage.getItem('editedUsersInfo'))


  constructor(private router:Router) { }

  ngOnInit(): void {
 
    if(this.userEdited!=null){
    this.userInfo =this.userEdited;
    }
    else{
      this.userInfo =this.Signindata;

    }
   
  }
  logout(){
    localStorage.clear() 
    sessionStorage.clear() 
  }
  ProfileShow(){
  

  }

}
