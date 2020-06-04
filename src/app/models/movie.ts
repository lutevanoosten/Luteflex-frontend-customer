export class Movie {


  titel: string;
  genre: string;
  beschrijving: string;
  cast: string;
  regiseur: string;
  poster: string;
  film: string;
  leeftijdbeperking: string;
  uitgevenjaar: string;

  constructor(Titel: string, Genre: string, Beschrijving: string, Cast: string, Regiseur: string,
              Poster: string, Film: string, Leeftijdbeperking: string, Uitgevenjaar: string) {
    this.titel = Titel;
    this.genre = Genre;
    this.beschrijving = Beschrijving;
    this.cast = Cast;
    this.regiseur = Regiseur;
    this.poster = Poster;
    this.film = Film;
    this.leeftijdbeperking = Leeftijdbeperking;
    this.uitgevenjaar = Uitgevenjaar;
  }
}
