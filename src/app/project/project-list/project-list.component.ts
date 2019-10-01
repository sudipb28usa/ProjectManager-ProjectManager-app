import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

//import { Project } from "../../shared/project";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() projectData = { project_Name: '' }


  displayedColumns: string[] = ['project_Name', 'no_Task', 'priority', 'start_Date', 'end_Date', 'status','Action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  Project: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadProject();
    this.Project.paginator = this.paginator;
    this.Project.sort = this.sort;
  }

  // Get Project list
  loadProject() {
    return this.restApi.getAllProject().subscribe((data: {}) => {
      this.Project = data;
    })
  }

  // Delete Project
  deleteProject(project_ID) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteProject(project_ID).subscribe(data => {
        this.loadProject()
      })
    }
  }  


    //   Project by name
    loadProjectByName() {
      return this.restApi.getAllProjectByName(this.projectData.project_Name).subscribe((data: {}) => {
        this.Project = data;
        
      })
    }

}
