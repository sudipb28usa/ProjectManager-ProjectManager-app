import { BaseResponse } from './base-response';
 
export class Project extends BaseResponse{

    project_ID: number;
    project_Name: string;

    start_Date: Date;
    end_Date: Date;
    priority: number;
    userManager_ID: number;

    noOfTask : number;
    status : string;
    
}
