import {Component, OnInit} from '@angular/core';
import {Movie} from '../models/movie';
import {MovieService} from '../services/movie/movie.service';


@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.scss']
})
export class AdmindashComponent implements OnInit {

  constructor( ) { }

  movieService = new MovieService();

  imageUrl: any;
  imageFile: File;
  imageReaderResult: any;

  movieUrl: any;
  movieFile: File;
  movieReaderResult: any;

  ngOnInit(): void {
  }

  onSubmit(title: string, genre: string, beschrijving: string, cast: string, regiseur: string, posterurl: string,
           filmurl: string, leeftijdbeperking: string, uitgevenjaar: string) {
    const movie = new Movie(title, genre, beschrijving, cast, regiseur, posterurl, filmurl, leeftijdbeperking, uitgevenjaar);
    this.movieService.uploadMovie(movie);

    // this.router.navigate(['profile']);
    // upload the thing already


  }

  selectPicture(event) {
    this.imageFile = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.imageUrl = reader.result;
      this.imageReaderResult = reader.result;
    };
  }

  selectMovie(event) {
    this.movieFile = event.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.movieUrl = reader.result;
      this.movieReaderResult = reader.result;
    };
  }

}
