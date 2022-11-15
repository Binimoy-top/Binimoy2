import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor() { }

  SessionStorageSet(x:any){
    sessionStorage.setItem("SigninData",JSON.stringify(x))
  }
 
}
