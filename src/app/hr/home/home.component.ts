import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/all_pojo/employeedetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sessiondata:any;

  employee:EmployeeDetails;

  constructor(private route:Router) { }

  ngOnInit(): void {

    this.sessiondata = sessionStorage.getItem("employeedata");
    this.employee = JSON.parse(this.sessiondata);

    console.log(this.employee);

    if(this.employee==null)
    {
        this.route.navigate(['login'])
    }
    

  }

  logout()
  {
    sessionStorage.clear();
    this.route.navigate(['login']);
  }

}
