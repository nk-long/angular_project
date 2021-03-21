import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from 'src/app/all_pojo/employeedetails';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';
import { TeamLeaderService } from 'src/app/all_Services/services/team-leader.service';


@Component({
  selector: 'app-team-status',
  templateUrl: './team-status.component.html',
  styleUrls: ['./team-status.component.css']
})
export class TeamStatusComponent implements OnInit {

  request:RequestDetails[];

  sessiondata:any;
  employee:EmployeeDetails;

  constructor(private teamleaderService:TeamLeaderService) { }

  ngOnInit(): void {

    this.sessiondata = sessionStorage.getItem("employeedata");
    this.employee=JSON.parse[this.sessiondata];

    

    this.reloadData();
  }
  reloadData()
  {


    console.log("In reload Data");

     this.teamleaderService.getAllRequest().subscribe(data=>{
       console.log(data);
      this.request=data;
    })
     
  }

}
