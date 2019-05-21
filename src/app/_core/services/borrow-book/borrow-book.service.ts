import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Borrow } from "../../models/borrow";
import { Book } from '../../models/book';

@Injectable({
  providedIn: "root"
})
export class BorrowBookService {
  constructor(private http: HttpClient) {}

  borrowBook(book: Book): Observable<Borrow> {
    return this.http.post<Borrow>(`/borrows/`, { book: book.id });
  }
}
