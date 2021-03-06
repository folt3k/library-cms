import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, Subject, Subscription } from "rxjs";

import { User } from "../../models/user";

export interface AuthCredentials {
  username: string;
  password: string;
}

interface AuthResponse {
  access: string;
  refresh: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isAuthorizedSubject = new Subject<boolean>();
  private _currentUser: User;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: AuthCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("/token/", credentials);
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
      () => {
        this.isAuthorizedSubject.next(false);
        this.router.navigate(["/"]);
      }
    );
  }

  get currentUser(): User {
    return this._currentUser;
  }

  isAuthorized(): Observable<boolean> {
    return this.isAuthorizedSubject.asObservable();
  }

  logout() {
    localStorage.removeItem("token");
    this._currentUser = null;
    this.isAuthorizedSubject.next(false);
    this.router.navigate(["/"]);
  }
}
