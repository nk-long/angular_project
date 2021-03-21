import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jobPostDetails } from 'src/app/all_pojo/jobpodt';

@Injectable({
  providedIn: 'root'
})
export class JobPostService {

  private baseUrl='http://localhost:8084/jobpost';

  constructor(private http:HttpClient) { }

  addPost(jobpost:jobPostDetails):Observable<any>
  {
    // console.log("in service : "+jobpost)
    // return null;
    console.log(jobpost);
    
    return this.http.post(`${this.baseUrl+'/addJobPost'}`,jobpost);
  }

  getAllJobPost():Observable<any>{
    console.log('in get all jobs');
    return this.http.get(`${this.baseUrl+'/getAllJobPost'}`);
  }

  getJobPost(jobId:number):Observable<any>
  {
    console.log("in get job"+ jobId);
    return this.http.get(`${this.baseUrl}/${jobId}`);
 
  }
}
