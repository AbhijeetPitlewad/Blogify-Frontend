import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserLoginService {

  loggedIn: boolean;
  curretUserId: string;

  constructor() {
      this.loggedIn=false;
      this.curretUserId=""; 
   }

  setCurrentUserId(userId: string, loggedIn: boolean): any {
    this.curretUserId = userId;
    this.loggedIn = loggedIn;
    return { curretUserId: this.curretUserId, loggedIn: this.loggedIn }
  }

  getCurrentUserId(): any {
    console.log("auth-"+ this.curretUserId);
    return this.curretUserId;
  }

}
