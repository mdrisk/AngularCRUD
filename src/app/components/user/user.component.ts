import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  user: User;
  

  constructor() { 
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: ''
    }

  }

  sayHello() {
    console.log(`Hello ${this.user.firstName},  but now you are...`);
    this.hasBirhday();
    console.log(`years old.`);
  }
 
  hasBirhday() {
    return 2;
  }
  
  reverseAddress() :string{
    return "hello world";
  }
}

