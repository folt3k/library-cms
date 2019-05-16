import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, Subscription } from "rxjs";
import { Router } from "@angular/router";

import { User } from "../../models/user";

export interface AuthCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isAuthorizedSubject = new Subject();
  private _currentUser: User;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post("/token/", credentials);
  }

  storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken(): string {
    return localStorage.getItem("token") || null;
  }

  getUserInfo(): Subscription {
    return this.http.get("/users/me/").subscribe(
      (user: User) => {
        this._currentUser = user;
        this.isAuthorizedSubject.next(true);
        this.router.navigate(["/ksiazki"]);
      },
      () => this.isAuthorizedSubject.next(false)
    );
  }

  get currentUser(): User {
    return this._currentUser;
  }

  isAuthorized(): Observable<any> {
    return this.isAuthorizedSubject.asObservable();
  }
}
