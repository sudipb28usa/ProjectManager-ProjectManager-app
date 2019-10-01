import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

//import { Task } from "../../shared/task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() taskData = { project_Name: '' }


  displayedColumns: string[] = ['task_Name', 'parent', 'priority', 'start_Date', 'end_Date', 'status','Action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  Task: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadTask();

    this.Task.paginator = this.paginator;
    this.Task.sort = this.sort;
  }

  // Get Task list
  loadTask() {
    return this.restApi.getAllTask().subscribe((data: {}) => {
      this.Task = data;
    })
  }

  // Delete Task
  deleteTask(task_ID) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteTask(task_ID).subscribe(data => {
        this.loadTask()
      })
    }
  }  


  //  Task By Project
  loadTaskByProject() {
    return this.restApi.getAllTaskByProject(this.taskData.project_Name).subscribe((data: {}) => {
      this.Task = data;
      
    })
  }

  
  // Delete Task
  markTaskComplete(task_ID) {
    if (window.confirm('Are you sure, you want to mark this task completed?')){
      this.restApi.markTaskComplete(task_ID).subscribe(data => {
        this.loadTask()
      })
    }
  }  

}
