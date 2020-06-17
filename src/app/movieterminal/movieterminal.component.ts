import {Component, OnInit} from '@angular/core';
import {style} from '@angular/animations';
import {$} from 'protractor';
import {Movie} from '../models/movie';
import {MovieService} from '../services/movie/movie.service';
import {Router} from '@angular/router';
import {Personalization} from '../models/personalization';
import {PersonalizationService} from '../services/personalization/personalization.service';

@Component({
  selector: 'app-movieterminal',
  templateUrl: './movieterminal.component.html',
  styleUrls: ['./movieterminal.component.scss']
})
export class MovieterminalComponent implements OnInit {

  persService: PersonalizationService = new PersonalizationService();

  subUser: Personalization;
  movieService = new MovieService();
  movieList: Movie[] = [];
  genreList: string[] = [];
  selectedMovie: Movie;

  constructor(private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('JWT') == null) {
      this.router.navigateByUrl('/login');
    } else {
      this.subUser = JSON.parse(localStorage.getItem('user'));

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
  }

  searchMovies(keyword: string): void {
    if (keyword.length > 0) {
      this.router.navigate(['/search', keyword]);
    }
  }

  addToFav(movie: Movie): void {
    this.subUser.favorites.push(movie.id.toString());
    this.persService.editUser(this.subUser);
  }
  removeFromFav(movie: Movie): void {
    this.subUser.favorites.splice(this.subUser.favorites.indexOf(movie.id.toString()), 1);
    this.persService.editUser(this.subUser);
  }

  signOut() {
    localStorage.removeItem('JWT');
    this.router.navigateByUrl('/');
  }
}
