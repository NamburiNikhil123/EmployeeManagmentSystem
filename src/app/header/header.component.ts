import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus: any;

  constructor(private service: EmpService) {
  }

  ngOnInit() {
    this.service.getStatusLogin().subscribe((data: any) => {
      this.loginStatus = data;
    });
  }

}