import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='https://binimoy.somee.com/api/'
  // url='https://localhost:44339/api/'

 

  constructor(private http:HttpClient) { 
   
  }

  userSignUp(data:any){
    return this.http.post(this.url,data).pipe(
      tap((response:any)=>{ 
        // console.log(response.data);
      })
    )
  }
  UserLogin(data:any){
    return this.http.post(this.url+"UserLoginValidate",data).pipe(
      tap((response:any)=>{ 
        // console.log(response.data);
        
      })
    )
  }

  UserEdit(id:string,data:any){
    return this.http.put(this.url+"users/"+id,data)
  }

  UsersList(){
    return this.http.get(this.url+"users/")
  }





  

}
