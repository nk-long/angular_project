import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from 'src/app/all_pojo/employeedetails';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseurl='http://localhost:8084/employeedetail/';

  constructor(private myhttp:HttpClient) { }

  userLogin(employee:EmployeeDetails):Observable<any>{
    return this.myhttp.post(`${this.baseurl+'userlogin'}`,employee);
  }

  addEmployee(employee:EmployeeDetails):Observable<any>{
    console.log(employee);
    return this.myhttp.post(`${this.baseurl+'addemployee'}`,employee);
    
  }
}
