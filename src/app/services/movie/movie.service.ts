import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import axios from 'axios';
import {Movie} from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  endpoint = 'http://localhost:8101//';

  constructor() { }

  async uploadMovie(movie: Movie): Promise<boolean> {
    return axios.post(this.endpoint + 'movie/upload', movie)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
}
