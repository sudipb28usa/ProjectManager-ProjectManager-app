import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSliderModule} from '@angular/material/slider';

 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 

 //Angular UI Componenet
import { AngularMaterialModule } from './angular-material.module';



import { ParentTaskCreateComponent } from './parent-task-create/parent-task-create.component';
import { ParentTaskDetailsComponent } from './parent-task-details/parent-task-details.component';
import { ParentTaskUpdateComponent } from './parent-task-update/parent-task-update.component';
import { ParentTaskListComponent } from './parent-task-list/parent-task-list.component';
import { ProjectCreateComponent } from './project/project-create/project-create.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { ProjectUpdateComponent } from './project/project-update/project-update.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { TaskCreateComponent } from './task/task-create/task-create.component';
import { TaskUpdateComponent } from './task/task-update/task-update.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentTaskCreateComponent,
    ParentTaskDetailsComponent,
    ParentTaskUpdateComponent,
    ParentTaskListComponent,
    ProjectCreateComponent,
    ProjectDetailsComponent,
    ProjectUpdateComponent,
    ProjectListComponent,
    TaskCreateComponent,
    TaskUpdateComponent,
    TaskListComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
