import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssessmentDetailService {

  private baseUrl='http://localhost:8084/AssesmentCRUD';
  constructor(private http:HttpClient) { }

  addAssessment(assesment:object):Observable<object>
  {
    console.log("In addAssessment");
    console.log(assesment);
    return this.http.post(`${this.baseUrl+ '/addAssesment'}`,assesment);
  }
  
  getAllAssessment():Observable<any>
  {
    console.log("in getAllAssessment ");
    return this.http.get(`${this.baseUrl+'/getAllAssesment'}`);
  }



}
