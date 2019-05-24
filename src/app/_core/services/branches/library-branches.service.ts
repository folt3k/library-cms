import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { QueryResponse } from "../../models/api";
import { LibraryBranch } from "../../models/library-branch";

@Injectable({
  providedIn: "root"
})
export class LibraryBranchesService {
  constructor(private http: HttpClient) {}

  queryBranches(): Promise<QueryResponse<LibraryBranch>> {
    return this.http.get<QueryResponse<LibraryBranch>>("/libraries/").toPromise();
  }

  addBranch(branch: LibraryBranch): Observable<LibraryBranch> {
    return this.http.post<LibraryBranch>("/libraries/", branch);
  }
}
