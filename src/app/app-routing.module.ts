import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SoftwareComponent} from "./software/components/list-software/list-software.component";
import {SoftwareViewComponent} from "./software/containers/Software-View/Software-View.component";

const routes: Routes = [
  { path: 'app-software-view', component: SoftwareViewComponent },
  { path: 'app-list-softwares', component: SoftwareComponent },
  { path: '',   redirectTo: '/root', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
