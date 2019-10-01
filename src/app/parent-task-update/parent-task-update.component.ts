import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent-task-update',
  templateUrl: './parent-task-update.component.html',
  styleUrls: ['./parent-task-update.component.css']
})
export class ParentTaskUpdateComponent implements OnInit {
  parent_ID = this.actRoute.snapshot.params['parent_ID'];
  parentTaskData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getParentTask(this.parent_ID).subscribe((data: {}) => {
      this.parentTaskData = data;
    })
  }

  // Update ParentTask data
  updateParentTask() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateParentTask(this.parentTaskData).subscribe(data => {
        this.router.navigate(['/parent-tasks-list'])
      })
    }
  }

}