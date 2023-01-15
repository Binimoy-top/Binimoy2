import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface user{
  Id:string;
  address:string;
  coin: number;
  username:string;
  email:string;
  phone:number;
  Password:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private usersser$=new BehaviorSubject<user[]>([]);

  constructor(private http:HttpClient) { }
  public init():void{
    this.http.get<user[]>('https://localhost:44339/api/users.json').subscribe(
      (usr)=>this.usersser$.next(usr)
    )
  }
  public getusersfromstore():Observable<user[]>{
    return this.usersser$;
  }

}
