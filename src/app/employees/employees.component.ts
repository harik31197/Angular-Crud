import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
//selectedEmployee: Employee;
//onSelect(employee:Employee):void{          // Dead
//  this.selectedEmployee = employee;
//}
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

