import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
// import { Blog } from './models/blog';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { 
  }

  createUser(user:any): Observable<any>{
    // user= JSON.stringify(user1);
    return this.httpClient.post("http://localhost:9292/user/sign-up", user);
  }

  logInUser(user:any): Observable<any>{
    // user= JSON.stringify(user1);
    return this.httpClient.post("http://localhost:9292/user/sign-in", user);
  }

  getUser(id:any): Observable<any>{
    // user= JSON.stringify(user1);
    return this.httpClient.get("http://localhost:9292/user/"+id);
  }

  updateUser(id:any, user: any): Observable<any>{
    // user= JSON.stringify(user1);
    return this.httpClient.put("http://localhost:9292/user/"+id, user);
  }

}
