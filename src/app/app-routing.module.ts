import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareercomComponent } from './career/careercom/careercom.component';
import { CreateApplicationComponent } from './career/create-application/create-application.component';
import { JobpostdisplayComponent } from './career/jobpostdisplay/jobpostdisplay.component';

import { JobpostlistComponent } from './career/jobpostlist/jobpostlist.component';

import { AddemployeeComponent } from './hr/addemployee/addemployee.component';
import { ApplicationDetailsComponent } from './hr/application-details/application-details.component';
import { HomeComponent } from './hr/home/home.component';
import { InterviewResultComponent } from './hr/interview-result/interview-result.component';
import { PostjobComponent } from './hr/postjob/postjob.component';
import { RequestDisplayComponent } from './hr/request-display/request-display.component';
import { ScheduleInterviewComponent } from './hr/schedule-interview/schedule-interview.component';
import { ViewApplicationComponent } from './hr/view-application/view-application.component';
import { ViewRequestComponent } from './hr/view-request/view-request.component';
import { CandidateAssessmentComponent } from './interviwer/candidate-assessment/candidate-assessment.component';
import { InterviewhomeComponent } from './interviwer/interviewhome/interviewhome.component';
import { TodayScheduleComponent } from './interviwer/today-schedule/today-schedule.component';
import { LoginComponent } from './login/login/login.component';
import { CheckEmployeeComponent } from './project_manager/check-employee/check-employee.component';
import { CreateProjectComponent } from './project_manager/create-project/create-project.component';
import { ProjectDetailsComponent } from './project_manager/project-details/project-details.component';
import { ProjectListComponent } from './project_manager/project-list/project-list.component';
import { ProjectmanagerComponent } from './project_manager/projectmanager/projectmanager.component';
import { RequsetDetailsComponent } from './project_manager/requset-details/requset-details.component';
import { UpdateProjectComponent } from './project_manager/update-project/update-project.component';
import { UpdateRequsetComponent } from './project_manager/update-requset/update-requset.component';
import { ViewProjectRequestComponent } from './project_manager/view-project-request/view-project-request.component';
import { TeamRequestComponent } from './teamlead/team-request/team-request.component';
import { TeamStatusComponent } from './teamlead/team-status/team-status.component';


import { TeamleadComponent } from './teamlead/teamlead/teamlead.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  
  { path: 'career', component:CareercomComponent ,
    children: [
      { path:'jobpostlist',component:JobpostlistComponent },
      { path:'jobpostdisplay/:jobId',component:JobpostdisplayComponent},
      { path:'createapplication',component:CreateApplicationComponent}
   
  ]
  },
  { path: 'login', component: LoginComponent},
  {
    
    path: 'hrhome', component: HomeComponent,
    children: [
      { path: 'addemployee', component: AddemployeeComponent },
      { path: 'postjob', component: PostjobComponent },
      { path: 'viewapp', component: ViewApplicationComponent },
      { path: 'applicationdetails/:applicationId', component: ApplicationDetailsComponent },
      { path:'scheduleinterview',component:ScheduleInterviewComponent},
      { path:'interviewresult',component:InterviewResultComponent},
      { path:'viewrequest',component:ViewRequestComponent},
      { path:'requestdisplay/:requestId',component:RequestDisplayComponent},
    ]
    

  },

  {
    path: 'teamlead', component: TeamleadComponent,
    children: [
      { path: 'request', component: TeamRequestComponent },
      { path: 'tlstatus', component: TeamStatusComponent }
    ]
  },
  { path: 'projectmanager', component: ProjectmanagerComponent ,

     children: [

      {path:'Projects',component:ProjectListComponent},
     {path:'Project',component:CreateProjectComponent},
     {path:'updateProject/:projectId',component:UpdateProjectComponent},
     {path:'details/:projectId',component:ProjectDetailsComponent},
     {path:'ViewRequest',component:ViewProjectRequestComponent},
     {path:'update/:requestId',component:UpdateRequsetComponent},
     {path:'requestDetails/:requestId',component:RequsetDetailsComponent},
     {path:'checkEmployee/:requestId',component:CheckEmployeeComponent}
    
    
     ]
    },
  {
    path: 'interviewer', component: InterviewhomeComponent,

    children: [
      { path: 'assesment', component: CandidateAssessmentComponent },
      { path: 'schedule', component: TodayScheduleComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
