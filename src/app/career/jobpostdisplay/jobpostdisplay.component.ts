import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { jobPostDetails } from 'src/app/all_pojo/jobpodt';
import { JobPostService } from 'src/app/all_Services/services/job-post.service';


@Component({
  selector: 'app-jobpostdisplay',
  templateUrl: './jobpostdisplay.component.html',
  styleUrls: ['./jobpostdisplay.component.css']
})
export class JobpostdisplayComponent implements OnInit {
  jobId: number;
  jobpost:jobPostDetails;

  constructor(private router:Router,private route:ActivatedRoute,private jobpostservice:JobPostService) { }

  ngOnInit(): void {
    
    
      this.jobId=this.route.snapshot.params['jobId'];
      
      this.jobpostservice.getJobPost(this.jobId).subscribe(
          data=>{
          console.log(data);
          this.jobpost=data;
          console.log(this.jobpost);
          
        },
      );
      
    }
   
    
  list1(){
   this.router.navigate(['career/jobpostlist']);

   }

  apply(){
    this.router.navigate(['career/createapplication']);

  }
}

