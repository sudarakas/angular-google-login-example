import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SocialAuthService} from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public socialAuthServive: SocialAuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.socialAuthServive.signOut().then(() => this.router.navigate(['login']));
  }

}
