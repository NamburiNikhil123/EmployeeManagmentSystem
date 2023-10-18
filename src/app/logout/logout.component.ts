import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  //Dependency Injection for EmpService, Router
  constructor(private service: EmpService, private router: Router) {
    this.service.setUserLogOut();
    this.router.navigate(['login']);
  }
}
