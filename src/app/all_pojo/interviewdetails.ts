import { ApplicationDetails } from "./applicationdetails";
import { EmployeeDetails } from "./employeedetails";
import { ProjectDetails } from "./projectdetails";

export class InterviewDetails{

    interviewId:number;
	employeeDetails:EmployeeDetails;
	applicationDetails:ApplicationDetails;
	projectDetails:ProjectDetails;
	interviewDate:Date;
	modeOfInterview:String;
}
    