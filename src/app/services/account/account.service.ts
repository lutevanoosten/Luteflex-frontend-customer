import { Injectable } from '@angular/core';
import axios from 'axios';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  endpoint = 'http://localhost:8099//';

  constructor() { }

  signIn(): Promise<string> {
    return axios.get(this.endpoint + 'user')
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
  register(user: User): Promise<string> {
    return axios.post(this.endpoint + 'user', user)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
}
