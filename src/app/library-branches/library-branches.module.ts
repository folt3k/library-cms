import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { CoreModule } from "../_core/core.module";
import { LibraryBranchesComponent } from "./library-branches.component";
import { LibraryBranchesRoutingModule } from "./library-branches-routing.module";
import { AddBranchDialogComponent } from "./modals/add-branch-dialog/add-branch-dialog.component";

@NgModule({
  declarations: [LibraryBranchesComponent, AddBranchDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, CoreModule, LibraryBranchesRoutingModule],
  entryComponents: [AddBranchDialogComponent]
})
export class LibraryBranchesModule {}
