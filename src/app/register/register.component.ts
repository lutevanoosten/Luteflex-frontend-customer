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
  checkPassword(pw: string, pwRepeat: string): void{
    if (pw !== pwRepeat) {
      alert('De wachtwoorden komen niet overeen.');
    } else if (pw.length < 5) {
      alert('Het wachtwoord moet minimaal 5 karakters lang zijn.');
    } else {
      this.password = pw;
      if(this.createAccount()){
        this.stepFour = false;
        this.stepFive = true;
      } else {
        alert('Er is een fout opgetreden, probeer het later opnieuw of neem contact op met Luteflex.');
      }
    }
  }

  createAccount(): boolean {
    const jwt = this.accountService.register(new User(this.email, this.password, 'someavatar.png', 'lute', this.package)).toString();
    if (jwt.length > 10) {
      localStorage.setItem('JWT', jwt);
      return true;
    } else {
      return false;
    }
  }
}
