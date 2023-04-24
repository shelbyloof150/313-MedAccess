export interface Patient {
  id: number;
  fname: string;
  lname: string;
  birthdate: Date;
  address: string;
  phone: string;
  readyForDoctor: boolean;
  apptDate: Date;
  height: string;
  weight: number;
  notes: string;
  roomNumber: number;
}
