import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/all_Services/services/employee.service';
import { EmployeeDetails } from 'src/app/all_pojo/employeedetails';
import { ProjectDetails } from 'src/app/all_pojo/projectdetails';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
    employee: EmployeeDetails= new EmployeeDetails();
    projectDetails : ProjectDetails = new ProjectDetails();
    
    


    
  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {
  }

  add()
  {
    
    console.log(this.employee);
    this.employee.projectDetails = this.projectDetails;
    this.employeeservice.addEmployee(this.employee).subscribe(data=>{
      console.log(data)
    },error=>console.log(error)
    );
  }

}
