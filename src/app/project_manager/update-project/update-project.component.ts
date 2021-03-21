import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetails } from 'src/app/all_pojo/projectdetails';
import { ProjectService } from 'src/app/all_Services/project.service';


@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  projectId:string;
  project:ProjectDetails;
  
  constructor(private projectservice:ProjectService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    console.log("ngOnInit() of UpdateProjectComponenet");
    this.projectId = this.route.snapshot.params['projectId'];
    console.log("projectId= "+this.projectId)
    this.project= new ProjectDetails();
    this.projectservice.getProject(this.projectId).subscribe
    (
      data=>{
        console.log(data);
        this.project=data;
      },error=>console.log(error)
    );
  }
updateProject()
{
  this.projectservice.updateProject(this.projectId,this.project).subscribe
  (data => 
    {
      console.log(data);
      this.project= new ProjectDetails();
      this.gotoList();
    },error=> console.log(error)
    );
}

gotoList()
{
  this.router.navigate(['projectmanager/Projects']);
}  
onSubmit()
  
  {
    this.updateProject();
  }

}
