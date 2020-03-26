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

  constructor() { }

  ngOnInit(): void {
  }

  packageselected(pack: string): void {
    let j;

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
      this.stepFour = false;
      this.stepFive = true;
    }

  }

}
