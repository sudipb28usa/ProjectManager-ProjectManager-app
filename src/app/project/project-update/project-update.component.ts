import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {


  project_ID = this.actRoute.snapshot.params['project_ID'];
  projectData: any = {};

  User: any = [];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 

    this.loadUser();
    
    this.restApi.getProject(this.project_ID).subscribe((data: {}) => {
      this.projectData = data;
    })


  }

  // Update Project data
  updateProject() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateProject(this.projectData).subscribe(data => {
        this.router.navigate(['/project-list'])
      })
    }
  }


      // Get User list
      loadUser() {
        return this.restApi.getAllUser().subscribe((data: {}) => {
          this.User = data;
        })
      }

}
