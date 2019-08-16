import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HeaderComponent} from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginUserData = {};

  constructor(
    private _auth: AuthService,
    private _router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }


  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['']);
        },
        err => console.log(err)
      );
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
