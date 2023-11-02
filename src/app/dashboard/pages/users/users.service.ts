import { Inject, Injectable } from '@angular/core';
import { User } from './models';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {
    console.log('LA URL INYECTADA ES :', url);
  }

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Peregrin',
        lastName: 'Took',
        email: 'pippin@mail.com',
        birthDate: new Date('1990-01-15'), 
        address: {
          street: 'Calle 1', 
          city: 'Ciudad 1',   
          zipCode: '12345',   
        },
      },
      {
        id: 2,
        name: 'Meriadoc',
        lastName: 'Brandybuck',
        email: 'merry@mail.com',
        birthDate: new Date('1988-03-22'), 
        address: {
          street: 'Calle 2', 
          city: 'Ciudad 2',   
          zipCode: '54321',   
        },
      },
    ];
  }
}
