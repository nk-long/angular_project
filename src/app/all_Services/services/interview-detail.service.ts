import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterviewDetails } from 'src/app/all_pojo/interviewdetails';

@Injectable({
  providedIn: 'root'
})
export class InterviewDetailService {
  

  private baseUrl = 'http://localhost:8084/interviewerDetails/';
 
  constructor(private http:HttpClient) { }


  getAllInterviewer():Observable<any>{

    console.log("In getAllInterviewer");
    console.log(`${this.baseUrl+'getAllInterviewer'}`);
    
    console.log(this.http.get(`${this.baseUrl+'getAllInterviewer'}`));
    return this.http.get(`${this.baseUrl+'getAllInterviewer'}`);

  }
  addInterviewer(interview:InterviewDetails):Observable<any>
  {
    console.log("Interview service"+interview);
    return this.http.post(`${this.baseUrl+'addinterviewer'}`,interview);
  }


}
