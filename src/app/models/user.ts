export class User {

  email: string;
  password: string;
  avatar: string;
  name: string;
  abbotype: string;

  constructor(Email: string, Password: string, Avatar: string, Name: string, Abbotype: string) {
    this.email = Email;
    this.password = Password;
    this.avatar = Avatar;
    this.name = Name;
    this.abbotype = Abbotype;
  }
}
