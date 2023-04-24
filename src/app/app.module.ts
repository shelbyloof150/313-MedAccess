import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NurseComponent } from './nurse/nurse.component';
import { RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { SearchComponent } from './search/search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NurseComponent, DoctorComponent, SearchComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent],
})
export class AppModule {}
