import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  authToken:any;
  user:any
  constructor(private http: HttpClient) {
  }
  listAdmin() {
    return this.http.get('http://localhost:8080/admin/')
  }
  login(user:any) {
    return this.http.post('http://localhost:8080/admin/AdminAuthenticate', user);
  }
  count() {
    return this.http.get('http://localhost:8080/admin/count-admin/')
  }

  storeUserData(token:any, user:any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
