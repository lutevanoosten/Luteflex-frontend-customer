import { Component, OnInit } from '@angular/core';
import {Personalization} from '../models/personalization';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  avatarchosen = false;
  chosenavatar = 1;
  subaccounts: Personalization[] = [];
  editing = false;

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

  editaccount(): void {
    this.editing = true;
    this.showNewUser();
  }

  createUser(name: string): void {
    if (this.editing) {
      // edit
    } else {
      // new
    }
  }

}
