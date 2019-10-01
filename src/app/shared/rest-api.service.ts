import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParentTask } from '../shared/parent-task';
import { Project } from '../shared/project';
import { Task } from '../shared/task';
import { User } from '../shared/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:8080/ProjectManagerRestAPI';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch ParentTasks list
  getParentTasks(): Observable<ParentTask> {
    return this.http.get<ParentTask>(this.apiURL + '/ParentTasks/getAllParentTasks/?key=SHARED_KEY')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch ParentTask
  getParentTask(parent_ID): Observable<ParentTask> {

    return this.http.get<ParentTask>(this.apiURL + '/ParentTasks/getParentTaskById/?key=SHARED_KEY&&parent_ID=' + parent_ID)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create ParentTask
  createParentTask(requentParentTask): Observable<ParentTask> {
    return this.http.post<ParentTask>(this.apiURL + '/ParentTasks/?key=SHARED_KEY', JSON.stringify(requentParentTask), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update ParentTask
  updateParentTask(ParentTask): Observable<ParentTask> {
    return this.http.put<ParentTask>(this.apiURL + '/ParentTasks/?key=SHARED_KEY', JSON.stringify(ParentTask), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete ParentTask
  deleteParentTask(parent_ID){
    return this.http.delete<ParentTask>(this.apiURL + '/ParentTasks/?key=SHARED_KEY&&parent_ID=' + parent_ID)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
//--------------Project---------------------------

 // HttpClient API get() method => Fetch Project list
 getAllProject(): Observable<Project> {
  return this.http.get<Project>(this.apiURL + '/Project/getAllProject/?key=SHARED_KEY')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// HttpClient API get() method => Fetch Project
getProject(project_ID): Observable<Project> {

  return this.http.get<Project>(this.apiURL + '/Project/getProjectById/?key=SHARED_KEY&&project_ID=' + project_ID)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  

// HttpClient API post() method => Create Project
createProject(requentProject): Observable<Project> {
  return this.http.post<Project>(this.apiURL + '/Project/?key=SHARED_KEY', JSON.stringify(requentProject), this.httpOptions)
  .pipe(
    retry(0),
    catchError(this.handleError)
  )
}  

// HttpClient API put() method => Update Project
updateProject(Project): Observable<Project> {
  return this.http.put<Project>(this.apiURL + '/Project/?key=SHARED_KEY', JSON.stringify(Project), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// HttpClient API delete() method => Delete Project
deleteProject(project_ID){
  return this.http.delete<Project>(this.apiURL + '/Project/?key=SHARED_KEY&&project_ID=' + project_ID)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


 // HttpClient API get() method => Fetch Project list by project name
 getAllProjectByName(project_Name): Observable<Project> {
  return this.http.get<Project>(this.apiURL + '/Project/getAllProjectByName/?key=SHARED_KEY&&project_Name='+project_Name)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}




//--------------Task---------------------------
 // HttpClient API get() method => Fetch Task list
 getAllTask(): Observable<Task> {
  return this.http.get<Task>(this.apiURL + '/Task/getAllTask/?key=SHARED_KEY')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// HttpClient API get() method => Fetch Task
getTask(task_ID): Observable<Task> {
 
  return this.http.get<Task>(this.apiURL + '/Task/getTaskById/?key=SHARED_KEY&&task_ID=' + task_ID)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}  

// HttpClient API post() method => Create Task
createTask(requentTask): Observable<Task> {
  return this.http.post<Task>(this.apiURL + '/Task/?key=SHARED_KEY', JSON.stringify(requentTask), this.httpOptions)
  .pipe(
    retry(0),
    catchError(this.handleError)
  )
}  

// HttpClient API put() method => Update Task
updateTask(Task): Observable<Task> {
  return this.http.put<Task>(this.apiURL + '/Task/?key=SHARED_KEY', JSON.stringify(Task), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// HttpClient API put() method => Update Task
markTaskComplete(task_ID): Observable<Task> {
  return this.http.put<Task>(this.apiURL + '/Task/markComplete/?key=SHARED_KEY&&task_ID='+task_ID, JSON.stringify(Task), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// HttpClient API delete() method => Delete Task
deleteTask(task_ID){
  return this.http.delete<Task>(this.apiURL + '/Task/?key=SHARED_KEY&&task_ID=' + task_ID)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

 // HttpClient API get() method => Fetch Task list for a project
 getAllTaskByProject(project_Name): Observable<Task> {
  return this.http.get<Task>(this.apiURL + '/Task/getAllTaskByProject/?key=SHARED_KEY&&project_Name='+ project_Name)
  .pipe(
    retry(0),
    catchError(this.handleError)
  )
}




 
//--------------User---------------------------
 // HttpClient API get() method => Fetch User list
 getAllUser(): Observable<User> { 
  return this.http.get<User>(this.apiURL + '/User/getAllUser/?key=SHARED_KEY')
  .pipe(
    retry(0),
    catchError(this.handleError)
  )
}


// HttpClient API get() method => Fetch User
getUser(user_ID): Observable<User> {

  return this.http.get<User>(this.apiURL + '/User/getUserById/?key=SHARED_KEY&&user_ID=' + user_ID)
  .pipe(
    retry(0),
    catchError(this.handleError)
  )
}  

// HttpClient API post() method => Create User
createUser(requentUser): Observable<User> {
  return this.http.post<User>(this.apiURL + '/User/?key=SHARED_KEY', JSON.stringify(requentUser), this.httpOptions)
  .pipe(
    retry(0),
    catchError(this.handleError)
  )
}  

// HttpClient API put() method => Update User
updateUser(User): Observable<User> {
  return this.http.put<User>(this.apiURL + '/User/?key=SHARED_KEY', JSON.stringify(User), this.httpOptions)
  .pipe(
    retry(0),
    catchError(this.handleError)
  )
}

// HttpClient API delete() method => Delete User
deleteUser(user_ID){
  return this.http.delete<User>(this.apiURL + '/User/?key=SHARED_KEY&&user_ID=' + user_ID)
  .pipe(
    retry(0),
    catchError(this.handleError)
  )
}


// HttpClient API get() method => Fetch User
getUserByFirstName(first_Name): Observable<User> {
  return this.http.get<User>(this.apiURL + '/User/getUserByFirstName/?key=SHARED_KEY&&first_Name=' + first_Name)
  .pipe(
    retry(0),
    catchError(this.handleError)
  )
}  







  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
    window.alert(errorMessage);
     return throwError(errorMessage);
  }

}