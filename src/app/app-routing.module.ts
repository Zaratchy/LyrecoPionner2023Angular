import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'navbar', component: NavbarComponent },
 /* { path: '',   redirectTo: '/app-home', pathMatch: 'full' },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
