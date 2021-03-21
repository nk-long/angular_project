import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationDetails } from 'src/app/all_pojo/applicationdetails';
import { EmployeeDetails } from 'src/app/all_pojo/employeedetails';
import { InterviewDetails } from 'src/app/all_pojo/interviewdetails';
import { ProjectDetails } from 'src/app/all_pojo/projectdetails';
import { InterviewDetailService } from 'src/app/all_Services/services/interview-detail.service';


@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {

  interview=new InterviewDetails();
  employee=new EmployeeDetails();
  application=new ApplicationDetails();
  project=new ProjectDetails();
  submitted=false;
  
  constructor(private interviewService:InterviewDetailService, private router:Router) { }

  ngOnInit(): void {
  }

  save()
  {
    console.log("In Save");
    console.log("In interview schedule save()");
    this.interview.employeeDetails=this.employee;
    this.interview.applicationDetails=this.application;
    this.interview.projectDetails=this.project;
    this.interviewService.addInterviewer(this.interview)
    .subscribe(
      data=>{
        console.log(data);
        this.interview=new InterviewDetails();
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
      this.router.navigate(['hrhome/applicationdetail']);
  }

  
}
