import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {Login} from '../loginInfo';
import {Employee} from '../employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empLogin: Login = {
    username : '',
    password : ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(loginpage:NgForm) {
    if((this.empLogin.username === 'ganguly') && (this.empLogin.password === 'president'))
    {
    console.log("dfsf");
    localStorage.setItem('username','ganguly');
    this.router.navigate(["dashboard"]);
   
  }

  else if((this.empLogin.username === 'kohli') && (this.empLogin.password === 'captain'))
  {
    console.log("Captain is in");
    localStorage.setItem('username','kohli');
    this.router.navigate(["user"]);
  }
  else
 {
   console.log("gone");
    alert("Invalid credentials");
 }
}
}
