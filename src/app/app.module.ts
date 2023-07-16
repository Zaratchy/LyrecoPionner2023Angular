import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftwareComponent } from './software/components/list-software/list-software.component';
import {SoftwareViewComponent} from "./software/containers/Software-View/Software-View.component";


@NgModule({
  declarations: [
    AppComponent,
    SoftwareComponent,
    SoftwareViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
