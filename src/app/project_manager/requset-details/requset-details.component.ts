import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';
import { ProjectService } from 'src/app/all_Services/project.service';


@Component({
  selector: 'app-requset-details',
  templateUrl: './requset-details.component.html',
  styleUrls: ['./requset-details.component.css']
})
export class RequsetDetailsComponent implements OnInit {


  requestId:number;
  request:RequestDetails;

  constructor(private router:Router, private route:ActivatedRoute,private projectservice:ProjectService) { }

  ngOnInit(): void {

    this.requestId=this.route.snapshot.params['requestId'];

    this.projectservice.getRequest(this.requestId).subscribe(data=>{
      console.log(data)
      this.request=data
  },error=>console.log(error)
  
  );
  }

  list()
  {
    this.router.navigate(['projectmanager/ViewRequest']);
  }

  checkEmp(requestId:number)
  {
    this.router.navigate(['projectmanager/checkEmployee',requestId]);
  }
  
  updateRequest(requstId:number)
  {
    console.log("In update Request Project : "+requstId);
    this.router.navigate(['projectmanager/update',requstId])
  }
  
}
