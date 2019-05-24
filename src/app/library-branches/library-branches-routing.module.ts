import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { LibraryBranchesComponent } from './library-branches.component';

const routes: Routes = [
    {
        path: '',
        component: LibraryBranchesComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class LibraryBranchesRoutingModule {}