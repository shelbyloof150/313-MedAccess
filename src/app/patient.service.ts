import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PatientService {
  PATIENTS: Patient[] = [
    {
      id: 1,
      fname: 'John',
      lname: 'Doe',
      birthdate: new Date('2001 - 01 - 01'),
      address: '123 St.',
      phone: '123-456-7890',
      readyForDoctor: false,
      apptDate: new Date('2023 - 02 - 02'),
      height: '5ft3in',
      weight: 123,
      notes: 'lovely notes',
      roomNumber: 4,
    },
  ];

  constructor(private http: HttpClient) {}

  addPatient(newPat: Patient) {
    return this.http.post(
      'https://medaccess-158a2-default-rtdb.firebaseio.com/' + 'patient.json',
      newPat
    );
  }

  getPatients() {
    return this.http
      .get<Patient[]>(
        'https://medaccess-158a2-default-rtdb.firebaseio.com/' + 'patient.json'
      )
      .pipe(
        map((responseData) => {
          const patientArray: Patient[] = [];
          for (const key in responseData) {
            patientArray.push(responseData[key]);
          }
          return patientArray;
        })
      );
  }

  clearData() {
    return this.http.delete(
      'https://medaccess-158a2-default-rtdb.firebaseio.com/' + 'patient.json'
    );
  }
}
