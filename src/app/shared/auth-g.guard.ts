import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGGuard implements CanActivate {
  constructor(private authGuard:AuthguardService,private router:Router) { }
  canActivate(){
    if(this.authGuard.isLoggedIn())
    {
      return true
    }
    this.router.navigate(['/'])
    return false

  }
   
  
  
}
