import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { SoftwaresComponent } from './softwares/softwares.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailsoftwareComponent } from './detailsoftware/detailsoftware.component';
import { DetailcustomerComponent } from './detailcustomer/detailcustomer.component';
import { AuthguardService } from "./services/authentification/authguard.service";
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'software/:id', component: DetailsoftwareComponent },
  { path: 'cart', component: CartComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'customers/:id', component: DetailcustomerComponent, canActivate: [AuthguardService] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'softwares', component: SoftwaresComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
