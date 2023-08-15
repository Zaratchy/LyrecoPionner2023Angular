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
import { MySoftwareComponent } from './dashboard/my-software/my-software.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { CrudSoftwareComponent } from './dashboard/admin/crud-software/crud-software.component';
import { UpdateSoftwareComponent } from './dashboard/admin/crud-software/update-software/update-software.component';
import { CreateSoftwareComponent } from './dashboard/admin/crud-software/create-software/create-software.component';


const routes: Routes = [
  { path: 'software/:id', component: DetailsoftwareComponent },
  { path: 'cart', component: CartComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'customers/:id', component: DetailcustomerComponent, canActivate: [AuthguardService] },
  { path: 'my-softwares', component: MySoftwareComponent, canActivate: [AuthguardService] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthguardService]},
  { path: 'update-software', component: AdminComponent, canActivate: [AuthguardService] },
  { path: 'admin-update-software/:id', component: UpdateSoftwareComponent, canActivate: [AuthguardService] },
  { path: 'login', component: LoginComponent },
  { path: 'admin-software', component: CrudSoftwareComponent, canActivate: [AuthguardService] },
  { path: 'admin-create-software', component: CreateSoftwareComponent, canActivate: [AuthguardService] },
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
