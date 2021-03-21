import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationDetails } from 'src/app/all_pojo/applicationdetails';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';
import { ApplicationDetailsService } from 'src/app/all_Services/services/application-details.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  applicationId:number;
  application:ApplicationDetails;
  requestId=new RequestDetails();


  constructor(private rout:ActivatedRoute,private router:Router,private applicationService:ApplicationDetailsService) { }

  ngOnInit(): void {


    console.log("in application details");
    

    this.applicationId=this.rout.snapshot.params['applicationId'];
    console.log(this.applicationId);
    
    this.applicationService.getApplicationDetailsByapplicationId(this.applicationId)
    .subscribe(
        data=>{
          console.log(data);
          this.application=data;
          console.log(this.application);

        }
    )
  }

  list()
  {
     this.router.navigate(['hrhome/viewapp']);
  }

  mailCommunication()
  {
    this.router.navigate(['hrhome/mail']);
  }
}
