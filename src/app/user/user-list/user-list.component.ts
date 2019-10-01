import { Component, OnInit, Input , ViewChild } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

//import { User } from "../../shared/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 

  @Input() userData = { first_Name: '' }

  User: any = [];


  displayedColumns: string[] = ['user_ID', 'first_Name', 'last_Name', 'employee_ID', 'task', 'project','Action'];
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  constructor(
    public restApi: RestApiService
  ) {     }

  ngOnInit() {
    this.loadUser();  
 
    this.User.paginator = this.paginator;
    this.User.sort = this.sort;
  }

  // Get User list
  loadUser() {
    return this.restApi.getAllUser().subscribe((data: {}) => {
      this.User = data;
    })
  }

  // Delete User
  deleteUser(user_ID) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteUser(user_ID).subscribe(data => {
        this.loadUser()
      })
    }
  }

  //  User By FirstName
  loadUserByFirstName() {
    return this.restApi.getUserByFirstName(this.userData.first_Name).subscribe((data: {}) => {
      this.User = data;
      
    })
  }

}
 