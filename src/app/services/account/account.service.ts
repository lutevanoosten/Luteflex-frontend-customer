import { Injectable } from '@angular/core';
import axios from 'axios';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  endpoint = 'http://userservice-env.eba-bfd9pyda.eu-central-1.elasticbeanstalk.com/';

  constructor() { }

  async signIn(user: User): Promise<string> {
    return axios.post(this.endpoint + 'user/login', user)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
  async register(user: User): Promise<string> {
    return axios.post(this.endpoint + 'user/register', user)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
}
