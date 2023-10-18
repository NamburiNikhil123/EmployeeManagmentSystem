import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  isUserLogged: boolean;
  

  constructor(private http: HttpClient) { 
    this.isUserLogged = false;
  }

  //Login
  setUserLogIn() {
    this.isUserLogged = true;
  }
  //Logout
  setUserLogOut() {
    this.isUserLogged = false;
  }
  getLoginStatus(): boolean {
    return this.isUserLogged;
  }
  getCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
  getAllEmployees(): any {
    return this.http.get("getAllEmployees");
  }
  getEmpById(empId: any): any {
    return this.http.get("getEmpById/" + empId);
  }
  getAllDepartments(): any {
    return this.http.get('getAllDepartments');
  }

  deleteEmployee(empId: any): any {
    return this.http.delete('deleteEmpById/' + empId);
  }

  updateEmployee(empId: any): any {
    return this.http.get("updateEmployee");
  }

}
