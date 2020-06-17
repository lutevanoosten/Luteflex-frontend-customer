import { Injectable } from '@angular/core';
import {Personalization} from '../../models/personalization';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PersonalizationService {

  endpoint = 'http://personalizationservice-env.eba-xjhb3m6z.eu-central-1.elasticbeanstalk.com/';
  persList: Personalization[] = [];

  headers = {
      authorization: localStorage.getItem('JWT')
  };

  constructor() { }

  private fillHeadersWithAuthorization() {
    this.headers = {
      authorization: localStorage.getItem('JWT')
    };
  }

  async editUser(pers: Personalization) {
    console.log('huil huil');
    this.fillHeadersWithAuthorization();
    return axios.post<Array<Personalization>>(this.endpoint + '/pers/edit', pers, {headers: this.headers})
      .then((response) => {
        this.persList = response.data;
        return this.persList;
      });
  }

  async newUser(pers: Personalization) {

    this.fillHeadersWithAuthorization();
    return axios.post<Array<Personalization>>(this.endpoint + '/pers/create', pers, {headers: this.headers})
      .then((response) => {
        this.persList = response.data;
        return this.persList;
      });
  }

  async deleteUser(pers: Personalization): Promise<string> {
    this.fillHeadersWithAuthorization();
    return axios.delete(this.endpoint + '/pers/remove/' + pers.id, {headers: this.headers})
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }

  async getUsers() {
    this.fillHeadersWithAuthorization();
    return axios.get<Array<Personalization>>(this.endpoint + '/pers/get', {headers: this.headers})
      .then((response) => {
        this.persList = response.data;
        return this.persList;
      });
  }
}
