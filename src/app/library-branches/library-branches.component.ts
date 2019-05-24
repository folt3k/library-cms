import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { filter } from "rxjs/operators";

import { LibraryBranch } from "../_core/models/library-branch";
import { LibraryBranchesService } from "../_core/services/branches/library-branches.service";
import { AddBranchDialogComponent } from "./modals/add-branch-dialog/add-branch-dialog.component";
import { AlertService } from "../_core/services/alert/alert.service";
import { DictsService } from "../_core/services/dicts/dicts.service";

@Component({
  selector: "app-library-branches",
  templateUrl: "./library-branches.component.html",
  styleUrls: ["./library-branches.component.scss"]
})
export class LibraryBranchesComponent implements OnInit {
  branches: LibraryBranch[] = [];
  displayedColumns = ["id", "name", "address", "phone_number"];

  constructor(
    private branchesService: LibraryBranchesService,
    public modal: MatDialog,
    private alertService: AlertService,
    private dictsService: DictsService
  ) {}

  ngOnInit() {
    this.loadBranches();
  }

  async loadBranches() {
    const branches = await this.branchesService.queryBranches();
    this.branches = branches.results;
  }

  openAddBranchDialog() {
    const ref = this.modal.open(AddBranchDialogComponent, {
      width: "400px"
    });

    ref
      .afterClosed()
      .pipe(filter(result => !!result))
      .subscribe(() => {
        this.alertService.open("Filia została pomyślnie dodana");
        this.dictsService.queryDicts();
        this.loadBranches();
      });
  }
}
