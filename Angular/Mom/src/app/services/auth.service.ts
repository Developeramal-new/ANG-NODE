import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin = new ReplaySubject<boolean>();
  loggedin = new ReplaySubject<boolean>();
  url = 'http://localhost/auth/';
  constructor(private http: HttpClient) {

   }

  emitloggedin(val) {
    this.loggedin.next(val);
  }

  emitadmin(val) {
    this.admin.next(val);
  }

  login(userdetails: any) {
    const head = new HttpHeaders();
    head.append('Content-Type',  'application/json');
    head.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    return this.http.post<{token: string, message: string, admin: boolean}>(this.url + 'login', userdetails, {headers: head} );
  }
  signup(userdetails: any) {
    const head = new HttpHeaders();
    head.append('Content-Type',  'application/json');
    head.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    return this.http.post<{result: boolean, message: string}>(this.url + 'register', userdetails, {headers: head} );
  }
}
