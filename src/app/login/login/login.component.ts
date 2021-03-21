import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/all_Services/services/employee.service';
import { EmployeeDetails } from 'src/app/all_pojo/employeedetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee:EmployeeDetails;
  
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.employee= new EmployeeDetails();
  } 

  login(){
    console.log(this.employee);

    this.employeeService.userLogin(this.employee).subscribe(data=>
      {
        console.log(data);
        this.employee=data;
        console.log(this.employee.projectDetails);
        sessionStorage.setItem("employeedata",JSON.stringify(this.employee));
        if(this.employee.designation=="HR")
        {
          console.log("redirect to hr")
          this.router.navigate(['/hrhome']); 
        }
        else if(this.employee.designation=="Team Leader"){
          console.log("redirect to T L");
          
          this.router.navigate(['/teamlead']);

        }
        else if(this.employee.designation=="Project Manager"){
          console.log("redirect to P M");
          
          this.router.navigate(['/projectmanager']);
        }
        else if(this.employee.designation=="java developer")
        {
          this.router.navigate(['/interviewer']);
        }
        else{
          console.log("in else");
          
          this.router.navigate(['']);
        }
      })
    
  }

  goto()
  {
    this.router.navigate(['career']);
  }

  gotologin()
  {
    this.router.navigate(['login']);
  }

}
