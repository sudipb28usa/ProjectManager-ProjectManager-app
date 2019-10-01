import { BaseResponse } from './base-response';
 
export class Task  extends BaseResponse{

    task_ID: number;
    parent_ID: number;
    project_ID: number;
    user_ID: number;
    task_Name: string;

    parent_TaskName: string;

    start_Date: Date;
    end_Date: Date;
    priority: number;
    status: string;

 

}
