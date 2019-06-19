import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
    
  }
  showExtended: boolean = true;
  enableAdd: boolean = false;
  loaded: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm')form: any;
  data: any; 


  constructor(private userService: UserService) { 

    
  }

  ngOnInit() {

    // this.UserService.getData().subscribe(data => {
    //   console.log(data);
    // });

    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      this.loaded = true;
    });


  }

  // addUser(){
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
      
  //   }
  // }

  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log('Not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }

  toggleHide(user: User)
  {
    user.hide = !user.hide;
  }
}
