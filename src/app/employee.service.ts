import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {EMPLOYEES} from './mock-employee';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {
    this.messageService.add('EmployeeService: fetched employees')
    return of(EMPLOYEES);
  }

  getEmployee(id:number): Observable<Employee> {
    this.messageService.add(`EmployeeService: fetched employees id=${id}`);
    return of(EMPLOYEES.find(employee=>employee.id===id));
  }

  
  constructor(private messageService: MessageService) { }
}
