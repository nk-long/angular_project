import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetails } from 'src/app/all_pojo/projectdetails';
import { ProjectService } from 'src/app/all_Services/project.service';
import { ProjectListComponent } from '../project-list/project-list.component';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  projectId:string;
  project:ProjectDetails;

  constructor(private router:Router, private route:ActivatedRoute,private projectservice:ProjectService) { }

  ngOnInit(): void {

    this.projectId=this.route.snapshot.params['projectId'];

    this.projectservice.getProject(this.projectId).subscribe(data=>{
      console.log(data)
      this.project=data
  },error=>console.log(error)
  
  );
  }

  list()
  {
    this.router.navigate(['projectmanager/Projects']);
  }

}
