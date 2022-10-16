import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='https://zahidprantakg.bsite.net/api/Users/'
  // url='https://localhost:44339/api/users'

 

  constructor(private http:HttpClient) { 
   
  }

  userSignUp(data:any){
    return this.http.post(this.url,data).pipe(
      tap((response:any)=>{ 
        console.log(response.data);
      })
    )
  }



  

}
