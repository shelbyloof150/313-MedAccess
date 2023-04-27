import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NurseComponent } from './nurse/nurse.component';
import { RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { SearchComponent } from './search/search.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { PatientListComponent } from './patient-list/patient-list.component';

//import { MatFormFieldModule} from '@angular/material/datepicker';

import { HttpClientModule } from '@angular/common/http';
import { ReceptionistComponent } from './receptionist/receptionist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NurseComponent,
    DoctorComponent,
    SearchComponent,
    DatepickerComponent,
    PatientListComponent,
    ReceptionistComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent],
  exports: [RouterModule],
})
export class AppModule {}
