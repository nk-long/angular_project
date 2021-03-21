import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

private baseUrl="http://localhost:8084/requestDetails";

  constructor(private http:HttpClient) { }

  getAllRequestToHr():Observable<any>{
    console.log("in get all req");
    return this.http.get(`${this.baseUrl + '/getAllRequestToHr'}`);


  }
  getRequest(requestId:number):Observable<any>
  {
    console.log("in get req");
    return this.http.get(`${this.baseUrl}/${requestId}`);


  }
  
}
