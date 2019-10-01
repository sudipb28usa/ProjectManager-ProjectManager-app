import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ParentTaskCreateComponent } from './parent-task-create/parent-task-create.component';
import { ParentTaskDetailsComponent  } from './parent-task-details/parent-task-details.component';
import { ParentTaskUpdateComponent  } from './parent-task-update/parent-task-update.component';
import { ParentTaskListComponent  } from './parent-task-list/parent-task-list.component';

import {  ProjectCreateComponent } from './project/project-create/project-create.component';
import { ProjectDetailsComponent  } from './project/project-details/project-details.component';
import { ProjectUpdateComponent  } from './project/project-update/project-update.component';
import { ProjectListComponent  } from './project/project-list/project-list.component';

import {  TaskCreateComponent } from './task/task-create/task-create.component';
import { TaskUpdateComponent  } from './task/task-update/task-update.component';
import { TaskListComponent  } from './task/task-list/task-list.component';

import {  UserCreateComponent } from './user/user-create/user-create.component';
import { UserUpdateComponent  } from './user/user-update/user-update.component';
import { UserListComponent  } from './user/user-list/user-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-user' },
  { path: 'create-parent-task', component: ParentTaskCreateComponent },
  { path: 'parent-task-details/:parent_ID', component: ParentTaskDetailsComponent },
  { path: 'update-parent-task/:parent_ID', component: ParentTaskUpdateComponent },
  { path: 'parent-tasks-list', component: ParentTaskListComponent}  ,

   
 
  { path: 'create-project', component: ProjectCreateComponent },
  { path: 'project-details/:project_ID', component: ProjectDetailsComponent },
  { path: 'update-project/:project_ID', component: ProjectUpdateComponent },
  { path: 'project-list', component: ProjectListComponent},  


  { path: 'create-task', component: TaskCreateComponent },
  { path: 'update-task/:task_ID', component: TaskUpdateComponent },
  { path: 'task-list', component: TaskListComponent}  ,


  { path: 'create-user', component: UserCreateComponent },
  { path: 'update-user/:user_ID', component: UserUpdateComponent },
  { path: 'user-list', component: UserListComponent} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }