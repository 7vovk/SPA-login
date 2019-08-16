import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../../../auth/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
              private _authService: AuthService,
              public dialog: MatDialog
  ) { }

  openDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '550px',
    });
  }

}
