import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  endpoint = 'http://localhost:8099//';

  constructor() { }

  getUser(): Promise<string> {
    return axios.get(this.endpoint + 'user')
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
}
