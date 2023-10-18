import { Component,OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginId: any;
  password: any;
  employee : any;
  employees: any;

//Dependency Injection for EmpService, Router
  constructor(private service: EmpService, private router:Router) {
    this.employees = [
      {empId: 101, empName:'Harsha', salary:1212.12, gender:'Male',   doj:'05/20/2018', country:'IND', emailId:'harsha@gmail.com', password:'123'},
      {empId: 102, empName:'Pasha',  salary:2121.21, gender:'Male',   doj:'06/21/2017', country:'KEN', emailId:'pasha@gmail.com',  password:'123'},
      {empId: 103, empName:'Indira', salary:3232.32, gender:'Female', doj:'07/22/2016', country:'USA', emailId:'indira@gmail.com', password:'123'},
      {empId: 104, empName:'Venkat', salary:4545.45, gender:'Male',   doj:'08/23/2015', country:'AUS', emailId:'venkat@gmail.com', password:'123'},
      {empId: 105, empName:'Gopi',   salary:5656.56, gender:'Male',   doj:'09/24/2014', country:'PAK', emailId:'gopi@gmail.com',   password:'123'}
    ];
    
  }
  ngOnInit(){
    
  }

  loginSubmit(loginForm: any) {
    console.log(loginForm);

    if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {
    
      this.service.setUserLogIn();
      this.router.navigate(['showemps']);
    } else {
      this.employees.forEach((emp: any) => {
        let checkmail= emp.emailId ;
        let checkpassword= emp.password;
       if (loginForm.emailId == checkmail && loginForm.password == checkpassword) {
          this.employee = emp;
        }
      });
      if (this.employee != null) {
        this.service.setUserLogIn();
        this.router.navigate(['products']);
      }
      else{
        alert("Login failed");
      }
    }
}
}
/*
  submit(){
  this.employees.forEach((emp: any) => {
    let checkmail=emp.emailId ;
    let checkpassword= emp.password;
   if (this.loginId === checkmail && this.password === checkpassword) {
      this.employee = emp;
    }
  });
  if (this.loginId === this.employee.emailId && this.password === this.employee.password) {
    alert("Login success");
  }
  else{
    alert("Login failed");
  }
}
}
*/