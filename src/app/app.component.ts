import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'HR Recruitment';
  hide=true;



  ngOnInit(): void {
   this.hide=true;
  }
  change()
  {
    this.hide=false;
  }

}
