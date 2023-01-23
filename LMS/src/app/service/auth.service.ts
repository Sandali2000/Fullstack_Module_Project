import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 authToken:any;
 user:any
  constructor(private  https:HttpClient,
              ) { }

  login(user:any) {
    return this.https.post('http://localhost:8080/users/authenticate', user);
  }
  register(user:any){
    return this.https.post('http://localhost:8080/users/register',user);
  }


  storeUserData(token:any, user:any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }


}
