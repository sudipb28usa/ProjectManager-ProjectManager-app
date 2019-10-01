import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-parent-task-create',
  templateUrl: './parent-task-create.component.html',
  styleUrls: ['./parent-task-create.component.css']
})
export class ParentTaskCreateComponent implements OnInit {

  @Input() parentTaskDetails = { parent_Task: ''}

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addParentTask() {
    this.restApi.createParentTask(this.parentTaskDetails).subscribe((data: {}) => {
      this.router.navigate(['/parent-tasks-list'])
    })
  }

}