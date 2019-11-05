import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees=>this.employees = employees);
  }
  ngOnInit() {
    this.getEmployees();
  }

}
