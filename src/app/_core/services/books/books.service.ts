import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {}

  queryBooks(): Promise<any> {
    return this.http.get('/books/').toPromise();
  }
}
