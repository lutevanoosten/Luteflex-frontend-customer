import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import axios from 'axios';
import {Movie} from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  endpoint = 'http://localhost:8101//';

  movieList: Movie[] = [];

  constructor() { }

  async uploadMovie(movie: Movie): Promise<boolean> {
    return axios.post(this.endpoint + 'movie/upload', movie)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }

  getMovies() {
    return axios.get<Array<Movie>>(this.endpoint + 'movie/get')
      .then((dat) => {
        this.movieList = dat.data;
        return this.movieList;
      });
  }

  async searchMovies(keyword: string) {
    return axios.get<Array<Movie>>(this.endpoint + 'movie/search/' + keyword)
      .then((response) => {
        this.movieList = response.data;
        return this.movieList;
      });
  }

  async deleteMovie(id: number): Promise<boolean> {
    console.log('eyyyy delete that');
    return axios.delete(this.endpoint + 'movie/delete/' + id)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
}
