import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

}
