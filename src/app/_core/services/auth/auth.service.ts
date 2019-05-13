import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { startWith } from "rxjs/operators";
import { Router } from '@angular/router';

export interface AuthCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorizedSubject = new Subject();

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post('/token/', credentials);
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token') || null;
  }

  getUserInfo(): any {
    return this.http.get('/users/me/')
      .subscribe(
        () => {
          this.isAuthorizedSubject.next(true);
          this.router.navigate(['/ksiazki']);
        },
        () => this.isAuthorizedSubject.next(false),
      )
  }

  isAuthorized(): Observable<any> {
    return this.isAuthorizedSubject.asObservable().pipe(startWith(false));
  }
}
