import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationDetails } from 'src/app/all_pojo/applicationdetails';
import { ApplicationDetailsService } from 'src/app/all_Services/services/application-details.service';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {
 applicationdetails:ApplicationDetails=new ApplicationDetails();
 submitted=false;
  constructor(private applicationservice:ApplicationDetailsService,private router:Router) { }

  ngOnInit(): void {


  }
  onSubmit(){
    console.log("in on submit");
    this.submitted=true;
    this.save();

  }
  save() {
    console.log("in save");
    this.applicationservice.createApplication(this.applicationdetails).subscribe(
      data=>{
        console.log(data);
      this.applicationdetails=new ApplicationDetails();
    },error=> console.log(error)

        
      
    );
  }

  
  gotoVacancy(){
    this.router.navigate(['career/jobpostlist'])

   }

}
