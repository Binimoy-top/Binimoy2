import { state } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { BehaviorSubject, Observable } from "rxjs";
import { user } from "../models/users.models";

export interface UsersState{
    users:user[];
}

@Injectable()
export class usersStore extends ComponentStore<UsersState>{
    private userslist$=new BehaviorSubject<user[]>([]);
    private temp:any;

    constructor(private http:HttpClient){
        super({
            users:
            [
                {username:'zahoidul',email:'asdasd',phone:12121,coin:1231,Id:'121',address:'sads',Password:'asda'},
                {username:'zahoidul',email:'asdasd',phone:12121,coin:1231,Id:'121',address:'sads',Password:'asda'}


                //4.23 second --https://www.youtube.com/watch?v=anjpJnn4dB4
            ]

        })
    }
    public init():void{
        this.http.get<user[]>('https://localhost:44339/api/users/').subscribe(x=>{
            this.userslist$.next(x)
            this.temp=11
            
        },(error) => {
              console.log(error);
              this.temp=1
              
            })

    }
    public getUsers():Observable<user[]>{
        return this.userslist$;
    }
    tempuser():any{
        return this.temp

    }

    // oneUser:any=this.select((state)=>state.oneuser)
    // oneUser:Observable<user>=this.select((state)=>state.oneuser)

    users$:Observable<user[]> = this.select((state)=>state.users)
}