import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestDetails } from 'src/app/all_pojo/requestdetails';
import { RequestService } from 'src/app/all_Services/services/request.service';


@Component({
  selector: 'app-request-display',
  templateUrl: './request-display.component.html',
  styleUrls: ['./request-display.component.css']
})
export class RequestDisplayComponent implements OnInit {
  requestId: number;
  request:RequestDetails;

  constructor(private requestservice:RequestService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.requestId=this.route.snapshot.params['requestId'];
    this.requestservice.getRequest(this.requestId).subscribe(
      data=>{
        console.log(data);
        this.request=data;
        console.log(this.request)

      }

    );
  }


  postJob()
  {
    this.router.navigate(['hrhome/postjob']);

   }
   requestlistlink(){
    this.router.navigate(['hrhome/viewrequest']);


  }

}
