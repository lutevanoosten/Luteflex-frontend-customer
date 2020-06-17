import { Component, OnInit } from '@angular/core';
import {Personalization} from '../models/personalization';
import {PersonalizationService} from '../services/personalization/personalization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  persService: PersonalizationService = new PersonalizationService();
  avatarchosen = false;
  chosenavatar = 1;
  subaccounts: Personalization[] = [];
  editing = false;
  editingperson: Personalization;

  constructor( private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('JWT') == null) {
      this.router.navigateByUrl('/login');
    } else {
      this.persService.getUsers().then(users => {
        this.subaccounts = users;
      });
    }
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

  editaccount(pers: Personalization): void {
    this.editingperson = pers;
    this.editing = true;
    this.showNewUser();
  }

  createUser(name: string): void {
    console.log('what the fuck');
    if (this.editing) {

      this.persService.editUser(new Personalization(this.editingperson.id, 1, name, 'av' + this.chosenavatar + '.png',
        this.editingperson.favorites, this.editingperson.watched)).then(users =>  {
        this.subaccounts = users;
      });
    } else {
      this.persService.newUser(new Personalization(1, 1, name, 'av' + this.chosenavatar + '.png',
        [], [])).then(users =>  {
        this.subaccounts = users;
      });

    }
  }

  deleteUser(pers: Personalization): void {
    this.persService.deleteUser(pers);
    this.subaccounts.splice(this.subaccounts.indexOf(pers), 1);
  }

  confirmuser(pers: Personalization): void {
    localStorage.setItem('user', JSON.stringify(pers));
    this.router.navigateByUrl('/watch');
  }

}
