import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  patientList: Patient[] = [];
  nextID: number = 0;

  pfname: string;
  plname: string;
  pbirthdate: Date;
  paddress: string;
  pphone: string;
  preadyForDoctor: boolean;
  papptDate: Date;
  pheight: string;
  pweight: number;
  pnotes: string;
  proomNumber: number;

  constructor(private patService: PatientService) {}

  fetchData() {
    this.patService.getPatients().subscribe((data) => {
      this.patientList = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  addNewPatient() {
    const newPatient: Patient = {
      id: ++this.nextID,
      fname: this.pfname,
      lname: this.plname,
      birthdate: this.pbirthdate,
      address: this.paddress,
      phone: this.pphone,
      readyForDoctor: this.preadyForDoctor,
      apptDate: this.papptDate,
      height: this.pheight,
      weight: this.pweight,
      notes: this.pnotes,
      roomNumber: this.proomNumber,
    };
    //this.patientList.push(newPatient);
    this.patService.addPatient(newPatient).subscribe((data) => {
      console.log(data);
      this.fetchData();
    });
  }

  onClearData() {
    this.patService.clearData().subscribe((data) => {
      this.fetchData();
      this.nextID = 0;
    });
  }
}
