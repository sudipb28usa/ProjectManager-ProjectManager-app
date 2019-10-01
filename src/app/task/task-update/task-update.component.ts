import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  Project: any = [];

  User: any = [];

  ParentTask: any = [];


  task_ID = this.actRoute.snapshot.params['task_ID'];
  taskData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 

    this.loadProject();
    this.loadUser();
    this.loadParentTasks();

    
    this.restApi.getTask(this.task_ID).subscribe((data: {}) => {
      this.taskData = data;
 
      
    })
  }

  // Update Task data
  updateTask() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateTask(this.taskData).subscribe(data => {
        this.router.navigate(['/task-list'])
      })
    }
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
