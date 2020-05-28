import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  avatarchosen = false;
  chosenavatar = 1;

  constructor() { }

  ngOnInit(): void {
  }

  chooseAvatar(id: number): void {
    this.chosenavatar = id;
    this.avatarchosen = true;
  }
  cancelAvatar(): void {
    this.avatarchosen = false;
    this.chosenavatar = 0;
  }

  showNewUser(): void {
    document.getElementById('newusermodal').style.display = 'block';
  }
  hideNewUser(): void {
    document.getElementById('newusermodal').style.display = 'none';
  }

}
