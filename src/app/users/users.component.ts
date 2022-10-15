import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  isLoading: boolean;
  isUpdating: boolean;
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  myTrackingContent: any;
  constructor(private userService: UserService) {
    this.isLoading = false;
    this.isUpdating=false;
    this.id = 0;
    this.first_name = '';
    this.last_name = '';
    this.email = '';
  }

  ngOnInit(): void {
  }

  FetchUsers() {
    this.isLoading = true;
    this.userService.GetUsers().subscribe(response => {
      console.log(response);
      this.users = response;
      this.isLoading = false;
    });
  }

  AddNewUser(first_name: string, last_name: string, email: string) {
    let newUser = { first_name: first_name, last_name: last_name, email: email };
    this.userService.AddUser(newUser).subscribe(response => {
      Swal.fire('User Added Successfully','','success');
      this.FetchUsers();
    });
  }

  DeleteUser(id: any) {
    this.userService.DeleteUser(id).subscribe(response => {
      Swal.fire('User Deleted Successfully','','success');
      this.FetchUsers();
    })
  }

  GetUserDetail(id: any, first_name: any, last_name: any, email: any) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.isUpdating=true;
  }

  UpdateUser(first_name: string,last_name: string, email: string) {
    let userData = { first_name, last_name, email };
    this.userService.EditUser(this.id, userData).subscribe(response => {
      Swal.fire('User updated Successfully','','success');
      this.isUpdating=false;
      this.FetchUsers();
    })
  }

  
  
}
