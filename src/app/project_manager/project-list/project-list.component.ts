import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectDetails } from 'src/app/all_pojo/projectdetails';
import { ProjectService } from 'src/app/all_Services/project.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {


  projects:Observable<ProjectDetails[]>;
  
  constructor(private projectservice:ProjectService,private router : Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  deleteProject(projectId:string)
  {
    console.log("In deleteProject : "+projectId);
    this.projectservice.deleteProject(projectId).subscribe
    (
      data=>{
        console.log(data);
        this.reloadData();
      },error => console.log(error)
    );
  }


  updateProject(projectId:string)
  {
    console.log("In updateProject : "+projectId);
    this.router.navigate(['projectmanager/updateProject',projectId])
  }

  projectDetails(projectId:string)
  {
    console.log("In projectDetails : "+projectId);
    this.router.navigate(['projectmanager/details',projectId])

  }

  reloadData()
  {
    console.log("In reloadData()");
    this.projects=this.projectservice.getProjectList();
    this.projects.forEach(elements=>{
      console.log(elements);
    });
  }
}
