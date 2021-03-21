import { Component, OnInit } from '@angular/core';
import { jobPostDetails } from 'src/app/all_pojo/jobpodt';
import { JobPostService } from 'src/app/all_Services/services/job-post.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  jobpost =new jobPostDetails();

  constructor(private jobpostService:JobPostService) { }

  ngOnInit(): void {
  }

  addjobpost(){

    console.log(this.jobpost);

    
    this.jobpostService.addPost(this.jobpost).subscribe(
      data=>{
        console.log(data);

        if(this.jobpost)
        alert("Vacancy Posted Successfully");

      }
    )
    
      
  }
}
