export class Personalization {

  id: number;
  mainaccount: number;
  name: string;
  avatar: string;
  favorites: string[];
  watched: string[];

  constructor(Mainaccount: number, Name: string, Avatar: string, Favorites: string[], Watched: string[]) {
    this.mainaccount = Mainaccount;
    this.name = Name;
    this.avatar = Avatar;
    this.favorites = Favorites;
    this.watched = Watched;
  }
}
