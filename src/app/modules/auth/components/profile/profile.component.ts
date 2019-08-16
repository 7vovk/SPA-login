import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  users = [];
  constructor(
    private _eventService: EventService,
    private _router: Router
    ) { }

  ngOnInit() {
    this._eventService.getAllUsers()
      .subscribe(
        res => this.users = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login']);
            }
          }
        }
      );
  }

}
