import { Component, OnInit } from '@angular/core';
import {AccountService} from '../services/account/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) { }
  emailInUse = false;

  ngOnInit(): void {
    const coll = document.getElementsByClassName('collapsible');
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
  }

  questionclick(): void {
    return;
  }

  register(email: string ): void {
    if (email === 'l.oosten13@gmail.com') {
      alert('Het gekozen e-mail adres is al in gebruik.');
    } else if (email.includes('@') && email.includes('.')) {
      sessionStorage.setItem('email', email);
      this.router.navigateByUrl('/newuser');
    } else {
      alert('Vul een geldig e-mail adres in.');
    }
  }
}
