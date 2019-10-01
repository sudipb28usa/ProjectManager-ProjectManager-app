import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { RestApiService } from "../../shared/rest-api.service";


@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

 

  User: any = [];
 

  @Input() projectDetails = { project_Name: '',start_Date:'' ,end_Date: '',priority: 0, userManager_ID : ''}

  constructor(
    public restApi: RestApiService, 
    public router: Router,
    public fb: FormBuilder
  ) { }

 
  ngOnInit() {
     this.loadUser();
   }

  addProject() {
    this.restApi.createProject(this.projectDetails).subscribe((data: {}) => {
      this.router.navigate(['/project-list'])
    })
  }



    // Get User list
    loadUser() {
      return this.restApi.getAllUser().subscribe((data: {}) => {
        this.User = data;
      })
    }

}
