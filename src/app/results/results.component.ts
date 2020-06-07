import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../services/movie/movie.service';
import {Movie} from '../models/movie';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  movieService = new MovieService();
  movieList: Movie[] = [];
  selectedMovie: Movie;
  keyword: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.keyword = this.route.snapshot.paramMap.get('keyword');
    this.movieService.searchMovies(this.keyword)
      .then(movies => {
        this.movieList = movies;
      });
  }

  showDetails(movie: Movie): void {
    this.selectedMovie = movie;
    document.getElementById('moviemodal').style.display = 'block';
    document.getElementById('innermodal').scrollTo({ top: (document.getElementById('innermodal').scrollTop = 0), behavior: 'smooth' });
  }
  hideDetails(): void {
    document.getElementById('moviemodal').style.display = 'none';
  }

  playvideo(): void {
    document.getElementById('videoplayer').requestFullscreen();
    document.getElementById('videoplayer')[0].play();
  }

}
