import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';
import { ProjectService } from 'src/app/all_Services/project.service';

@Component({
  selector: 'app-view-project-request',
  templateUrl: './view-project-request.component.html',
  styleUrls: ['./view-project-request.component.css']
})
export class ViewProjectRequestComponent implements OnInit {

  
  request:Observable<RequestDetails[]>;
  constructor(private projectservice:ProjectService,private router : Router) { }

  ngOnInit(): void {
    this.reloadRequestData();
  }

  requestDetails(requestId:number)
  {
    console.log("In projectRequestDetails : "+requestId);
    this.router.navigate(['projectmanager/requestDetails',requestId])

  }

  reloadRequestData()
  {
    console.log("In reloadData()");
    this.request=this.projectservice.getProjetRequest();
    this.request.forEach(elements=>{
      console.log(elements);
    });
  }

  
  

}
