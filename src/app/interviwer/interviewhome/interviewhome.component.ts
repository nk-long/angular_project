import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/all_pojo/employeedetails';

@Component({
  selector: 'app-interviewhome',
  templateUrl: './interviewhome.component.html',
  styleUrls: ['./interviewhome.component.css']
})
export class InterviewhomeComponent implements OnInit {

  sessiondata:any;
  employee:EmployeeDetails;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.sessiondata=sessionStorage.getItem('employeedata');
    this.employee= JSON.parse(this.sessiondata);

    if(this.employee==null){
        this.router.navigate(['login']);
    }

  }


  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }


}
