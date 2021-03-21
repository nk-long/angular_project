import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetails } from 'src/app/all_pojo/projectdetails';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';
import { TeamLeaderService } from 'src/app/all_Services/services/team-leader.service';


@Component({
  selector: 'app-team-request',
  templateUrl: './team-request.component.html',
  styleUrls: ['./team-request.component.css']
})
export class TeamRequestComponent implements OnInit {

  request=new RequestDetails();
 
  projectDetails = new ProjectDetails();
  submitted=false;

  constructor(private teamleaderService:TeamLeaderService,private router:Router) { }

  ngOnInit(): void {
  }

onSubmit()
{
  this.submitted=true;
  this.save();
}

save()
{
  this.request.projectdetails = this.projectDetails;
  console.log("In save ");
  this.teamleaderService.addRequest(this.request).subscribe(
    data=>{
      console.log(data);
      this.request=data;


    },error=>console.log(error)
  );
}

gotoList()
{
  this.router.navigate(['teamlead/tlstatus']);
}


}
