import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationDetails } from 'src/app/all_pojo/applicationdetails';
import { ApplicationDetailsService } from 'src/app/all_Services/services/application-details.service';


@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  application:ApplicationDetails[];
  constructor(private applicationService:ApplicationDetailsService,private router:Router) { }

  ngOnInit(): void {
      this.reloadData();
  }

  reloadData()
  {
    console.log("In reload Data");
    this.applicationService.getAllApplicationDetails().subscribe(
      data=>{
        console.log(data);
        this.application=data;
      }
    )
  }

  getDetail(applicationId:number){
    console.log("In getDetail "+applicationId);
    this.router.navigate(['hrhome/applicationdetails', applicationId]);
  }
}
