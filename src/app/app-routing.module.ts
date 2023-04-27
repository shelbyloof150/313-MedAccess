import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NurseComponent } from './nurse/nurse.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';

const routes: Routes = [
  { path: '', redirectTo: '/receptionist', pathMatch: 'full' },
  { path: 'receptionist', component: ReceptionistComponent },
  { path: 'nurse', component: NurseComponent },
  { path: 'doctor', component: DoctorComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
