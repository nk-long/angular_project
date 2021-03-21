import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareercomComponent } from './career/careercom/careercom.component';

import {    HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './hr/home/home.component';
import { TeamleadComponent } from './teamlead/teamlead/teamlead.component';
import { ProjectmanagerComponent } from './project_manager/projectmanager/projectmanager.component';
import { InterviewhomeComponent } from './interviwer/interviewhome/interviewhome.component';
import { AddemployeeComponent } from './hr/addemployee/addemployee.component';
import { PostjobComponent } from './hr/postjob/postjob.component';
import { FormsModule } from '@angular/forms';
import { TeamRequestComponent } from './teamlead/team-request/team-request.component';
import { TeamStatusComponent } from './teamlead/team-status/team-status.component';
import { CandidateAssessmentComponent } from './interviwer/candidate-assessment/candidate-assessment.component';
import { TodayScheduleComponent } from './interviwer/today-schedule/today-schedule.component';
import { ApplicationDetailsComponent } from './hr/application-details/application-details.component';
import { ViewApplicationComponent } from './hr/view-application/view-application.component';
import { ScheduleInterviewComponent } from './hr/schedule-interview/schedule-interview.component';
import { InterviewResultComponent } from './hr/interview-result/interview-result.component';
import { ViewRequestComponent } from './hr/view-request/view-request.component';
import { JobpostlistComponent } from './career/jobpostlist/jobpostlist.component';
import { JobpostdisplayComponent } from './career/jobpostdisplay/jobpostdisplay.component';
import { CreateApplicationComponent } from './career/create-application/create-application.component';
import { RequestDisplayComponent } from './hr/request-display/request-display.component';
import { CreateProjectComponent } from './project_manager/create-project/create-project.component';
import { ProjectDetailsComponent } from './project_manager/project-details/project-details.component';
import { ProjectListComponent } from './project_manager/project-list/project-list.component';
import { RequsetDetailsComponent } from './project_manager/requset-details/requset-details.component';
import { UpdateProjectComponent } from './project_manager/update-project/update-project.component';
import { UpdateRequsetComponent } from './project_manager/update-requset/update-requset.component';
import { ViewProjectRequestComponent } from './project_manager/view-project-request/view-project-request.component';
import { CheckEmployeeComponent } from './project_manager/check-employee/check-employee.component';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CareercomComponent,
    LoginComponent,
    HomeComponent,
    TeamleadComponent,
    TeamRequestComponent,
    TeamStatusComponent,
    ProjectmanagerComponent,
    InterviewhomeComponent,
    ApplicationDetailsComponent,
    ViewApplicationComponent,
    CandidateAssessmentComponent,
    TodayScheduleComponent,
    AddemployeeComponent,
    PostjobComponent,
    ScheduleInterviewComponent,
    InterviewResultComponent,
    ViewRequestComponent,
    JobpostlistComponent,
    JobpostdisplayComponent,
    CreateApplicationComponent,
    RequestDisplayComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    CheckEmployeeComponent,
    ProjectListComponent,
    RequsetDetailsComponent,
    UpdateProjectComponent,
    UpdateRequsetComponent,
    ViewProjectRequestComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {provide : LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
