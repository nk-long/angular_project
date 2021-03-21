import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InterviewDetails } from 'src/app/all_pojo/interviewdetails';
import { InterviewDetailService } from 'src/app/all_Services/services/interview-detail.service';


@Component({
  selector: 'app-today-schedule',
  templateUrl: './today-schedule.component.html',
  styleUrls: ['./today-schedule.component.css']
})
export class TodayScheduleComponent implements OnInit {
 
  interview:Observable<InterviewDetails[]>;

  constructor(private interviewDetailService:InterviewDetailService) { }

  ngOnInit(): void {  
    console.log("ngOnInit");
    this.reloadData();
  }
  
  reloadData()
  {
    console.log("In reload Data");
     this.interview =this.interviewDetailService.getAllInterviewer();
     this.interview.forEach(element=>{
       console.log("for loop");
       
      console.log(element);
    });
  }


}
