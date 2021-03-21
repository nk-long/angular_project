import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationDetailsService {
  
  
  private baseUrl='http://localhost:8084/ApplicationDetails';
  constructor(private http:HttpClient) { }

  getAllApplicationDetails():Observable<any>
  {
    console.log("In getAllApplicationDetails");
    return this.http.get(`${this.baseUrl+'/getAllApplicationDetails'}`);
  }

  getApplicationDetailsByapplicationId(applicationId:number):Observable<any>
  {
    console.log("In getApplicationDetails()");
    return this.http.get(`${this.baseUrl}/${applicationId}`);
  }

  createApplication(applicationdetails:Object):Observable<Object>{
    console.log("in add application");
    console.log(applicationdetails);
    return this.http.post(`${this.baseUrl + '/addApplication'}` , applicationdetails);
  }

}
