import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationDetails } from 'src/app/all_pojo/applicationdetails';
import { AssessmentDetails } from 'src/app/all_pojo/assessmentdetails';
import { InterviewDetails } from 'src/app/all_pojo/interviewdetails';
import { AssessmentDetailService } from 'src/app/all_Services/services/assessment-detail.service';

@Component({
  selector: 'app-candidate-assessment',
  templateUrl: './candidate-assessment.component.html',
  styleUrls: ['./candidate-assessment.component.css']
})
export class CandidateAssessmentComponent implements OnInit {

  submitted=false;
  application=new ApplicationDetails();
  interview= new InterviewDetails();

  assessment=new AssessmentDetails();

  constructor(private router:Router,private assessmentService:AssessmentDetailService) { }

  ngOnInit(): void {
  }

  save()
  {
    console.log("In Save");
    console.log(this.assessment);
    this.assessment.applicationDetails=this.application;
    this.assessment.interviewerDetails=this.interview;
    this.assessmentService.addAssessment(this.assessment)
    .subscribe(
      data=>{
        console.log(data);
        this.assessment=new AssessmentDetails();
      },error=>console.log(error)
    );
  }
  onSubmit()
  {
    this.submitted=true;
    this.save();
  }
  gotoList()
  {
    this.router.navigate(['/schedules']);
  }
}
