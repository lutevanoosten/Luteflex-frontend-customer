import {Component, OnInit} from '@angular/core';
import {style} from '@angular/animations';
import {$} from 'protractor';
import {Movie} from '../models/movie';
import {MovieService} from '../services/movie/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movieterminal',
  templateUrl: './movieterminal.component.html',
  styleUrls: ['./movieterminal.component.scss']
})
export class MovieterminalComponent implements OnInit {

  movieService = new MovieService();
  movieList: Movie[] = [];
  genreList: string[] = [];
  selectedMovie: Movie;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.movieService.getMovies()
      .then(movies => {
        for (const movie of movies) {
          if (!this.genreList.includes(movie.genre)) {
            this.genreList.push(movie.genre);
            console.log('what');
          }
          console.log('what2');
        }
        console.log('what3');
        this.movieList = movies;
      });


  }

  openNav(): void {
    document.getElementById('mySidenav').style.width = '275px';
    document.getElementById('main').style.marginLeft = '275px';
    document.getElementById('blur').style.width = '100%';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav(): void {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('blur').style.width = '0';
    document.body.style.backgroundColor = 'white';
  }

  btnRight(row: string): void {
    document.getElementById(row).scrollTo({ left: (document.getElementById(row).scrollLeft + 400), behavior: 'smooth' });
    console.log(row);
  }
  btnLeft(row: string): void {
    document.getElementById(row).scrollTo({ left: (document.getElementById(row).scrollLeft - 400), behavior: 'smooth' });
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

  searchMovies(keyword: string): void {
    if (keyword.length > 0) {
      this.router.navigate(['/search', keyword]);
    }
  }
}
