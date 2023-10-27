import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  //To Enable and Disable Login, Register and Logout
  loginStatus: Subject<any>;
  isUserLogged: boolean;

  //Dependency Injection for HttpClient
  constructor(private http: HttpClient) { 
    this.isUserLogged = false;

    //To Enable and Disable Login, Register and Logout
    this.loginStatus = new Subject();
  }

  getCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  empLogin(loginForm: any) {
    return this.http.get("empLogin/" + loginForm.emailId + "/" + loginForm.password).toPromise();
  }

  getAllEmployees(): any {
    return this.http.get("getAllEmployees");
  }
  getEmpById(empId: any): any {
    return this.http.get('getEmpById/' + empId);
  }
  getAllDepartments(): any {
    return this.http.get('getAllDepartments');
  }
  registerEmployee(emp: any): any {
    return this.http.post('registerEmployee', emp);
  }
  deleteEmployee(empId: any): any {
    return this.http.delete('deleteEmpById/' + empId);
  }
  updateEmployee(emp: any): any {
    return this.http.put('updateEmployee', emp);
  }



  //Login
  setUserLogIn() {
    this.isUserLogged = true;

    //To Enable and Disable Login, Register and Logout
    this.loginStatus.next(true);
  }
  //Logout
  setUserLogOut() {
    this.isUserLogged = false;

    //To Enable and Disable Login, Register and Logout
    this.loginStatus.next(false);
  }
  //AuthGuard
  getLoginStatus(): boolean {
    return this.isUserLogged;
  }

  //To Enable and Disable Login, Register and Logout
  getStatusLogin(): any {
    return this.loginStatus.asObservable();
  }

}


