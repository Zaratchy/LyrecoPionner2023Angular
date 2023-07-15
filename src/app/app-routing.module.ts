import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SoftwareComponent} from "./Contenairs/software/software.component";

const routes: Routes = [
  { path: 'app-software', component: SoftwareComponent },
  { path: '',   redirectTo: '/app-home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
