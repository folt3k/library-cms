import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Book } from '../../models/book';
import { QueryResponse } from '../../models/api';

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor(private http: HttpClient) {}

  queryBooks(params: any): Promise<QueryResponse<Book>> {
    return this.http.get<QueryResponse<Book>>("/books/", { params }).toPromise();
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>("/books/", book);
  }
}
