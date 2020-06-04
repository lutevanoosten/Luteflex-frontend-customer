import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AccountService} from '../services/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  accountService = new AccountService();

  stepOne = true;
  stepTwo = false;
  stepThree = false;
  stepFour = false;
  stepFive = false;

  email: string = sessionStorage.getItem('email');
  package: string;
  password: string;
  username: string;

  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  packageselected(pack: string): void {
    let j;
    this.package = pack;

    const deselect = document.getElementsByClassName('selected');
    while (deselect.length) {
      deselect[0].classList.remove('selected');
    }

    const select = document.getElementsByClassName(pack);
    for (j = 0; j < select.length; j++) {
      select[j].classList.add('selected');
    }
  }

  nextmodal(): void {
    if (this.stepOne) {
      this.stepOne = false;
      this.stepTwo = true;
    } else if (this.stepTwo) {
      this.stepTwo = false;
      this.stepThree = true;
    } else if (this.stepThree) {
      this.stepThree = false;
      this.stepFour = true;
    }
  }
  async checkPassword(pw: string, pwRepeat: string, name: string): Promise<any> {
    if (pw !== pwRepeat) {
      alert('De wachtwoorden komen niet overeen.');
    } else if (pw.length < 5) {
      alert('Het wachtwoord moet minimaal 5 karakters lang zijn.');
    } else {
      this.password = pw;
      this.username = name;
      await this.createAccount().then((response) => {
        console.log(response)
        if (response) {
          this.stepFour = false;

          this.stepFive = true;
        } else {
          alert('Er is een fout opgetreden, probeer het later opnieuw of neem contact op met Luteflex.');
        }
      });
    }
  }

  async createAccount(): Promise<boolean> {
    this.loading = true;
    return this.accountService.register(new User(this.email, this.password, 'av1.png', this.username, this.package))
      .then((response) => {
        if (response.length > 10) {
          localStorage.setItem('JWT', response);
          return true;
        } else {
          return false;
        }
    });
  }
}
