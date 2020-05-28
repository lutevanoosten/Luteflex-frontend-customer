import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  stepOne = true;
  stepTwo = false;
  stepThree = false;
  stepFour = false;
  stepFive = false;

  email: string = sessionStorage.getItem('email');
  package: string;
  password: string;

  wrongpw = false;
  shortpw = false;

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
    } else if (this.stepFour) {
      if (( document.getElementById('pw') as HTMLInputElement).value !==
        ( document.getElementById('pw_repeat') as HTMLInputElement).value) {
        alert('De wachtwoorden komen niet overeen.');
      } else if ( (document.getElementById('pw') as HTMLInputElement).value.length < 5) {
        alert('Het wachtwoord moet minimaal 5 karakters lang zijn.');
      } else {
        this.stepFour = false;
        this.stepFive = true;
      }
    }
  }
}
