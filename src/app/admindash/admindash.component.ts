import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Movie} from '../models/movie';
import {MovieService} from '../services/movie/movie.service';


@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.scss']
})
export class AdmindashComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef ) { }

  movieService = new MovieService();

  movieList: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getMovies()
      .then(movies => {
        this.movieList = movies;
      });
  }

  uploadFilm(title: string, genre: string, beschrijving: string, cast: string, regiseur: string, posterurl: string,
             filmurl: string, leeftijdbeperking: string, uitgevenjaar: string) {
    const movie = new Movie(title, genre, beschrijving, cast, regiseur, posterurl, filmurl, leeftijdbeperking, uitgevenjaar);



    this.movieService.uploadMovie(movie).then(
      m => {
        this.movieService.getMovies()
          .then(movies => {
            this.movieList = movies;
          });
      }
    );
  }

  removeMovie(movie: Movie) {
      this.movieService.deleteMovie(movie.id);


      this.movieList.splice(this.movieList.indexOf(movie), 1);


  }

  // selectPicture(event) {
  //   this.imageFile = event.target.files[0];
  //
  //   const reader = new FileReader();
  //
  //   reader.readAsDataURL(event.target.files[0]); // read file as data url
  //
  //   reader.onload = (event) => { // called once readAsDataURL is completed
  //     this.imageUrl = reader.result;
  //     this.imageReaderResult = reader.result;
  //   };
  // }
  //
  // selectMovie(event) {
  //   this.movieFile = event.target.files[0];
  //
  //   const reader = new FileReader();
  //
  //   reader.readAsDataURL(event.target.files[0]); // read file as data url
  //
  //   reader.onload = (event) => { // called once readAsDataURL is completed
  //     this.movieUrl = reader.result;
  //     this.movieReaderResult = reader.result;
  //   };
  // }

}
