import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AccountService} from '../services/account/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  accountService = new AccountService();

  loading = false;

  ngOnInit(): void {
  }

  async signIn(email: string, password: string): Promise<void> {
    this.loading = true;
    return this.accountService.signIn(new User(email, password, '', '' , ''))
      .then((response) => {
        if (response.length > 100) {
          localStorage.setItem('JWT', response);
          this.router.navigateByUrl('/watch');
        } else {
          alert(response);
        }
      });
  }
}
