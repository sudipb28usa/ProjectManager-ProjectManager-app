import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../../shared/rest-api.service";


@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  Project: any = [];

  User: any = [];

  ParentTask: any = [];

  @Input() taskDetails = {task_Name: 'Task1_proj1',
                          start_Date:'09/02/2019' ,
                          end_Date: '09/02/2020',
                          priority: 0, 
                          status: 'new', 
                          project_ID:'',
                          user_ID:'',
                          parent_ID:''
 
                        }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { 

    this.loadProject();
    this.loadUser();
    this.loadParentTasks();
  }

  addTask() {
    this.restApi.createTask(this.taskDetails).subscribe((data: {}) => {
      this.router.navigate(['/task-list'])
    })
  }


    // Get Project list
    loadProject() {
      return this.restApi.getAllProject().subscribe((data: {}) => {
        this.Project = data;
      })
    }

  // Get User list
  loadUser() {
    return this.restApi.getAllUser().subscribe((data: {}) => {
      this.User = data;
    })
  }


    // Get Parent task list
    loadParentTasks() {
      return this.restApi.getParentTasks().subscribe((data: {}) => {
        this.ParentTask = data;
      })
    }

}