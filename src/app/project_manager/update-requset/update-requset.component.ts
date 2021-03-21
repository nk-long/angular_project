import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetails } from 'src/app/all_pojo/projectdetails';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';
import { ProjectService } from 'src/app/all_Services/project.service';


@Component({
  selector: 'app-update-requset',
  templateUrl: './update-requset.component.html',
  styleUrls: ['./update-requset.component.css']
})
export class UpdateRequsetComponent implements OnInit {

   //requestdetails:RequestDetails=new RequestDetails();
   //projectdetails:ProjectDetails=new ProjectDetails();
    requestId:number;
    request:RequestDetails=new RequestDetails();
    project:ProjectDetails = new ProjectDetails();
    projectId:String;
  constructor(private projectservice:ProjectService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {


    console.log("ngOnInit() of UpdateRequestComponenet");
    this.requestId = this.route.snapshot.params['requestId'];
    console.log("requestId= "+this.requestId)
  //  this.request.projectdetails = new ProjectDetails();
    this.getdata();
  }

  getdata()
  {
    this.projectservice.getRequest(this.requestId).subscribe
    (
      data=>{
        console.log(data);
        this.request=data;

        this.project=this.request.projectdetails;
        console.log(this.request.projectdetails.projectId);
        
      },error=>console.log(error)
    );
  }


  updateRequest()
{
  console.log("update request method");
  // console.log(this.request);
//   this.project=this.request.projectdetails;
//  // this.project=this.project.projectId;
//   this.request.projectdetails = this.project;

 // this.projectId=this.request.projectdetails.projectId;
  this.projectId=this.request.projectdetails.projectId;

  console.log(this.request);
  

  this.projectservice.updateRequest(this.requestId,this.request).subscribe
  (data => 
    {
      console.log(data);
      this.request= data;
      this.gotoList();
    },error=> console.log(error)
    );
}


gotoList()
{
  this.router.navigate(['projectmanager/requestDetails',this.requestId]);
}  
onSubmit()
  
  {
    this.updateRequest();
  }

}
