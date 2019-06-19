import { Injectable } from '@angular/core';


import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<Array<any>>;

  constructor() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john1@example.com',
        isActive: true,
        registered: new Date('02/01/2010 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'Jane2@example.com',
        isActive: false,
        registered: new Date('04/24/2010 08:30:00'),
        hide: true
      },
      {
        firstName: 'Carl',
        lastName: 'Jr',
        email: 'Carl3@example.com',
        isActive: true,
        registered: new Date('12/25/2010 08:30:00'),
        hide: true
      }
    ];

   }

   getUsers(): Observable<Array<User>> {
    return of(this.users);
   }

   addUser(user: User) {
    this.users.unshift(user);
   }

  //  getData() {
  //    this.data = new Observable(observer => {
  //      setTimeout(() => {
  //        observer.next(1);
  //      }, 1000);

  //      setTimeout(() => {
  //       observer.next(2);
  //     }, 2000);

  //     setTimeout(() => {
  //       observer.next(3);
  //     }, 3000);

  //     setTimeout(() => {
  //       observer.next(4);
  //     }, 4000);
  //    })

  //    return this.data;
  //  }
}
