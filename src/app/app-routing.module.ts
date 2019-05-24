import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "ksiazki",
    loadChildren: "./books/books.module#BooksModule"
  },
  {
    path: "filie",
    loadChildren: "./library-branches/library-branches.module#LibraryBranchesModule"
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
