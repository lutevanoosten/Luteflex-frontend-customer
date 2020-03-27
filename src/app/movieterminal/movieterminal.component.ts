import {Component, OnInit} from '@angular/core';
import {style} from '@angular/animations';
import {$} from 'protractor';

@Component({
  selector: 'app-movieterminal',
  templateUrl: './movieterminal.component.html',
  styleUrls: ['./movieterminal.component.scss']
})
export class MovieterminalComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  openNav(): void {
    document.getElementById('mySidenav').style.width = '275px';
    document.getElementById('main').style.marginLeft = '275px';
    document.getElementById('blur').style.width = '100%';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav(): void {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('blur').style.width = '0';
    document.body.style.backgroundColor = 'white';
  }

  btnRight(): void {
    document.getElementById('container').scrollTo({ left: (document.getElementById('container').scrollLeft + 400), behavior: 'smooth' });
  }
  btnLeft(): void {
    document.getElementById('container').scrollTo({ left: (document.getElementById('container').scrollLeft - 400), behavior: 'smooth' });
  }
}
