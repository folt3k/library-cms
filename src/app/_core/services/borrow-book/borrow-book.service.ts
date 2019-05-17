import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BorrowBookService {
  constructor(private http: HttpClient) {}

  borrowBook(borrowInstance) {
    return this.http.post("/borrows/", borrowInstance);
  }
}
