import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DictsService {
  private dicts: any = {};

  constructor(private http: HttpClient) {}

  queryDicts(): Promise<any> {
    const library_branches = this.http.get("/libraries").toPromise();
    const book_categories = this.http.get("/categories").toPromise();

    return Promise.all([library_branches, book_categories]).then((dicts: any) => {
      this.dicts.library_branches = dicts[0].results.map((b, i) => ({ id: i + 1, ...b }));
      this.dicts.book_categories = dicts[1].results;
      this.dicts.authors = [
        {
          id: 1,
          name: "Szymborska"
        }
      ]
    });
  }

  getDict(key: string): object {
    return this.dicts[key];
  }
}
