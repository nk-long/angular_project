import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/all_pojo/employeedetails';
import { ProjectDetails } from 'src/app/all_pojo/projectdetails';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';
import { ProjectService } from 'src/app/all_Services/project.service';
//import { error } from 'protractor';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-employee',
  templateUrl: './check-employee.component.html',
  styleUrls: ['./check-employee.component.css']
})
export class CheckEmployeeComponent implements OnInit {

  employeeId: number;
  requestId: number;
  employee: EmployeeDetails[];
  tempEmployee : EmployeeDetails = new EmployeeDetails();
  project: ProjectDetails;
  request: RequestDetails= new RequestDetails();

  constructor(private projectservice: ProjectService, private router: Router, private activerouter: ActivatedRoute) { }

  ngOnInit(): void {


    this.reloadData();

  }


  updateProjectId(employeeId: number) {
    this.requestId = this.activerouter.snapshot.params['requestId'];

    console.log("requestId " + this.requestId);
    console.log("employeeId " + employeeId);

    this.projectservice.getEmployee(employeeId).subscribe(data => {console.log(data);
    this.tempEmployee = data;
    console.log("Temp Employee");
    console.log(this.tempEmployee);
    
    console.log("-------------------------------------------------");
    console.log(this.tempEmployee);
    
    this.projectservice.UpdateProjectIdForEmployee(this.requestId, this.tempEmployee).subscribe(
      data => {
        console.log(data);
        this.tempEmployee = data;
        console.log("employee object");

        console.log(this.tempEmployee);
        this.updateNoofEmp();
        this.gotoRequestList();
      }, error => console.log(error)
    );
    })
    

  }
updateNoofEmp()
{
  this.projectservice.updateNoOfRequiredEmp(this.requestId,this.request).subscribe
  (data=>
    {
      console.log(data);
     // this.request=data;
      console.log(this.request);
    },error=> console.log(error)
    );
  
}
 
  gotoRequestList() {
    this.router.navigate(['projectmanager/ViewRequest']);
  }
  reloadData() {

    this.requestId = this.activerouter.snapshot.params['requestId'];
    this.projectservice.getEmpList(this.requestId).subscribe
      (
        data => {
          console.log(data);
          this.employee = data;
        }, error => console.log(error)
      );
  }





}