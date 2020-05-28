import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MovieterminalComponent} from './movieterminal/movieterminal.component';
import {AccountsComponent} from './accounts/accounts.component';
import {ResultsComponent} from './results/results.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newuser', component: RegisterComponent },
  { path: 'watch', component: MovieterminalComponent },
  { path: 'users', component: AccountsComponent },
  { path: 'result', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
