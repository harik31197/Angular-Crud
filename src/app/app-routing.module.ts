import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {LoginComponent} from './login/login.component';
import {UserviewComponent} from './userview/userview.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'dashboard' , component: DashboardComponent},
  {path:'employees', component: EmployeesComponent},
  {path: 'detail/:id', component:EmployeeDetailComponent},
  {path:'login',component: LoginComponent},
  {path:'user',component: UserviewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
