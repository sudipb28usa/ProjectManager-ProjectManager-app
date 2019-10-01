import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-parent-task-list',
  templateUrl: './parent-task-list.component.html',
  styleUrls: ['./parent-task-list.component.css']
})
export class ParentTaskListComponent implements OnInit {

  ParentTask: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadParentTasks()
  }

  // Get ParentTasks list
  loadParentTasks() {
    return this.restApi.getParentTasks().subscribe((data: {}) => {
      this.ParentTask = data;
    })
  }

  // Delete ParentTasks
  deleteParentTask(parent_ID) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteParentTask(parent_ID).subscribe(data => {
        this.loadParentTasks()
      })
    }
  }  

}