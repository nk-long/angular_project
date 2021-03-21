import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../all_pojo/employeedetails';
import { RequestDetails } from '../all_pojo/requestdetails';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseURL='http://localhost:8084/ProjectDetails';
  private baseURL1='http://localhost:8084/requestDetails';
  private baseURL2='http://localhost:8084/employeedetail';
  constructor(private http:HttpClient) { }

  getProjectList(): Observable<any>
  {
    console.log("getProjectList");
    return this.http.get(`${this.baseURL +'/getAllProjectDetails'}`);
  }

  createproject(project:object):Observable<any>
  {console.log(project);
    console.log("In createProject()");
    
    return this.http.post(`${this.baseURL+'/addProject'}`,project);
  }

  updateProject(projectId:string,project:any):Observable<object>
  {
    console.log("In updateProject()");

    return this.http.put(this.baseURL+'/updateProject/'+projectId,project);
  }

  getProject(projectId:string):Observable<any>
  {
    console.log("In getProject()");
    return this.http.get(`${this.baseURL}/${projectId}`);
  }

  deleteProject(projectId:string):Observable<any>
  {
    console.log("In deleteProjcet()");
    return this.http.delete(`${this.baseURL}/${projectId}`);
  }

  getProjetRequest():Observable<any>
  {
    console.log("In getProjectRequest()");
    return this.http.get(`${this.baseURL1+'/getAllRequest'}`);
  }

  getRequest(requestId:number):Observable<any>
  {
    console.log("In getRequest()");
    return this.http.get(`${this.baseURL1}/${requestId}`);
  }

  updateRequest(requestId:number,request:RequestDetails):Observable<any>
  {
    console.log();

    return this.http.put(`${this.baseURL1+'/update/'}${requestId}`,request);
  }

  UpdateProjectIdForEmployee(requestId:number,employee:EmployeeDetails):Observable<any>
  {
    //return this.http.put(`${this.baseURL2+'/updateprojectId'}/${requestId}`,employee);

    return this.http.put(`${this.baseURL2+'/updateprojectId/'}${requestId}`,employee);

  }
  getEmpList(requestId:number):Observable<any>
  {

    console.log("getAvailablEmployee");
    return this.http.get(`${this.baseURL2+'/getAvailableEmp'}${requestId}`);

  }

  getEmployee(employeeId:number):Observable<any>
  {
    console.log("getEmpoyee Id:"+employeeId);
    console.log("In getemployee()");
    return this.http.get(`${this.baseURL2}/${employeeId}`);
  }

  updateNoOfRequiredEmp(requestId:number,request:RequestDetails)
  {
    console.log("updateNoOfRequiredEmp() called");
    return this.http.put(`${this.baseURL1+'/updateNoOfRequiredEmp/'}${requestId}`,request);

  }



}
