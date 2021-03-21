import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetails } from 'src/app/all_pojo/projectdetails';
import { ProjectService } from 'src/app/all_Services/project.service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project: ProjectDetails= new ProjectDetails();
  submitted = false;

  constructor(private projectservice:ProjectService,private router: Router) { }
  onSubmit()
  {
    this.submitted=true;
   this.save(); 
  }

  ngOnInit(): void {
  }

  save()
  {
    console.log("in save");
    console.log(this.project);

    this.projectservice.createproject(this.project).subscribe(
      data=>{
        console.log(data);
        this.project=new ProjectDetails();
      },error=> console.log(error) 
    );
  }

  gotoList()
  {
    this.router.navigate(['projectmanager/Projects']);
  }
}
