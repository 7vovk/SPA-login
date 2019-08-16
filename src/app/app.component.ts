import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './modules/auth/services/auth.service';
import {LoginComponent} from './modules/auth/components/login/login.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  status: boolean = false;
  constructor(
              private router: Router,
              private _authService: AuthService,
              public dialog: MatDialog
  ) { }

  clickEvent() {
    this.status = !this.status;
  }

  openDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '550px',
    });
  }
}
