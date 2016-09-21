import {Page, NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {AccountsPage} from '../../pages/accounts/accounts';

@Component({
  templateUrl: 'build/login/login/login.html'
})
export class LoginPage {
 username: string;
  password : string;
  constructor(private http:Http,private navController: NavController) {
    console.log(this.username);
    console.log(this.password);
    };
  changePage(event) {
		this.navController.push(AccountsPage);
	}
}
