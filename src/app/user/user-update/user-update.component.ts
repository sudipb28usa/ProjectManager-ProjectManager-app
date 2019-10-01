import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user_ID = this.actRoute.snapshot.params['user_ID'];
  userData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getUser(this.user_ID).subscribe((data: {}) => {
      this.userData = data;
    })
  }

  // Update User data
  updateUser() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateUser(this.userData).subscribe(data => {
        this.router.navigate(['/user-list'])
      })
    }
  }

}