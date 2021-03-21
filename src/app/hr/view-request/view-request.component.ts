import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';
import { RequestService } from 'src/app/all_Services/services/request.service';




@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
   
  requestdetails:Observable<RequestDetails[]>;
  constructor(private requestservice:RequestService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
  console.log("in reload");
  this.requestservice.getAllRequestToHr().subscribe(
  data=>{
      console.log(data);
      this.requestdetails=data;
      console.log(this.requestdetails=data);

    },error=>console.log(error)
  );
  }

  viewhrrequest(requestId:number){
    this.router.navigate(['hrhome/requestdisplay',requestId]);


  }

}
