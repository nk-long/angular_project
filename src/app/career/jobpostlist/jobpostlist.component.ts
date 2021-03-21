import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jobPostDetails } from 'src/app/all_pojo/jobpodt';
import { JobPostService } from 'src/app/all_Services/services/job-post.service';



@Component({
  selector: 'app-jobpostlist',
  templateUrl: './jobpostlist.component.html',
  styleUrls: ['./jobpostlist.component.css']
})
export class JobpostlistComponent implements OnInit {

    jobpostdetails:jobPostDetails[];
    jobpostdetail:jobPostDetails;

    
  
  constructor(private jobpostservice:JobPostService,private router:Router ) { }

  ngOnInit(): void {
    this.reloadData(); 
 

}
  reloadData() {
    console.log("Ib relaod")
    this.jobpostservice.getAllJobPost().subscribe(
    data=>{
    console.log(data);
    this.jobpostdetails=data;
    console.log(    this.jobpostdetails=data);
    },error =>console.log(error)
    
    );
  }

  
  
  details(jobId:number){
   this.router.navigate(['career/jobpostdisplay',jobId]);
   }

}