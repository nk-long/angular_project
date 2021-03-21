import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { AssessmentDetails } from 'src/app/all_pojo/assessmentdetails';
import { AssessmentDetailService } from 'src/app/all_Services/services/assessment-detail.service';


@Component({
  selector: 'app-interview-result',
  templateUrl: './interview-result.component.html',
  styleUrls: ['./interview-result.component.css']
})
export class InterviewResultComponent implements OnInit {


  assessment:AssessmentDetails[];
  constructor(private assessmentService:AssessmentDetailService) { }

  ngOnInit(): void {
    console.log("In reload data");
    this.reloadData();
  }

  reloadData()
  {
    console.log("In interview-result reload data ");
    this.assessmentService.getAllAssessment()
    .subscribe(
      data=>{
        console.log(data);
        this.assessment=data;
      }

    )
  }
}
