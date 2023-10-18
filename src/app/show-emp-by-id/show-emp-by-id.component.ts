import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-show-emp-by-id',
  templateUrl: './show-emp-by-id.component.html',
  styleUrls: ['./show-emp-by-id.component.css']
})
export class ShowEmpByIdComponent implements OnInit {
  empId: any;
  employee: any;
  emailId: any;

  //Date Of Join: MM/dd/yyyy

  //Dependency Injection for EmpService
  constructor(private service: EmpService) {
    this.emailId = localStorage.getItem("emailId");
    //Delete all the hardcoded employees JSON Objects
  }

  ngOnInit() {
  }

  getEmployee() {

    this.employee = null;

    this.service.getEmpById(this.empId).subscribe((data: any) => {
      this.employee = data;
      console.log(data);
    });
  }

}
