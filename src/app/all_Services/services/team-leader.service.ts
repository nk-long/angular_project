import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';

@Injectable({
  providedIn: 'root'
})
export class TeamLeaderService {

  private baseUrl='http://localhost:8084/requestDetails';
  
  constructor(private http:HttpClient) { }

  addRequest(request:RequestDetails):Observable<any>
  {
    console.log("In addRequest");
    console.log(request);
    return this.http.post(`${this.baseUrl+'/addrequest'}`,request);
  }
  getAllRequest():Observable<any>{
    console.log("In getAllRequest");
    return this.http.get(`${this.baseUrl+'/getAllRequest'}`);
  }
  
}
