export class Personalization {

  id: number;
  mainaccount: number;
  name: string;
  avatar: string;
  favorites: string[];
  watched: string[];

  constructor(Id: number, Mainaccount: number, Name: string, Avatar: string, Favorites: string[], Watched: string[]) {
    this.id = Id;
    this.mainaccount = Mainaccount;
    this.name = Name;
    this.avatar = Avatar;
    this.favorites = Favorites;
    this.watched = Watched;
  }
}
