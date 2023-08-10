import {Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { SoftwaresComponent } from './softwares/softwares.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailsoftwareComponent } from './detailsoftware/detailsoftware.component';
import { DetailcustomerComponent } from './detailcustomer/detailcustomer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthentificationService } from "./services/authentification/authentification.service";
import { CartComponent } from './cart/cart.component';
import { MySoftwareComponent } from './dashboard/my-software/my-software.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { CrudSoftwareComponent } from './dashboard/admin/crud-software/crud-software.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    SoftwaresComponent,
    RegisterComponent,
    LoginComponent,
    DetailsoftwareComponent,
    DetailcustomerComponent,
    CartComponent,
    MySoftwareComponent,
    AdminComponent,
    CrudSoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthentificationService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
