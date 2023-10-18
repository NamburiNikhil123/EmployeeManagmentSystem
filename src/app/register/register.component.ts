import { Component,OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //For Countries API
  countries: any;
  employee: any;
  departments: any;

  //Dependency Injection for EmpService
  constructor(private service: EmpService) {
    this.employee = {
      "empId":"",
      "empName":"",
      "salary":"",
      "gender":"",
      "doj":"",
      "country":"",
      "emailId":"",
      "password":"",
      "department": {
        "deptId":""
      }
    }
  }
  
  ngOnInit() {
    this.service.getCountries().subscribe((data: any) => {
      this.countries = data;
      console.log(data);
    });

    this.service.getAllDepartments().subscribe((data: any) => {
      this.departments = data;
      console.log(data);
    });
  }

  register() {
    alert("Employee Registration Success");
    console.log(this.employee);
  }
}