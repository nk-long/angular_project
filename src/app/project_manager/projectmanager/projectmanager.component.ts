import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/all_pojo/employeedetails';

@Component({
  selector: 'app-projectmanager',
  templateUrl: './projectmanager.component.html',
  styleUrls: ['./projectmanager.component.css']
})
export class ProjectmanagerComponent implements OnInit {

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
