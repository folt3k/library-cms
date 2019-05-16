import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor(private http: HttpClient) {}

  queryBooks(params: any): Promise<any> {
    return this.http.get("/books/", { params }).toPromise();
  }

  addBook(book) {
    return this.http.post("/books/", book);
  }
}
