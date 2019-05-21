import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { QueryResponse } from "../../models/api";
import { BookAuthor } from "../../models/book";

@Injectable({
  providedIn: "root"
})
export class DictsService {
  private dicts: any = {};

  constructor(private http: HttpClient) {}

  queryDicts(): Promise<any> {
    const dicts = this.http.get("/dictionaries").toPromise();
    const authors = this.http.get<QueryResponse<BookAuthor>>("/authors").toPromise();

    return Promise.all([dicts, authors]).then(data => {
      this.dicts = {
        ...data[0],
        authors: data[1].results
      };
    });
  }

  getDict(key: string): object {
    return this.dicts[key];
  }
}
