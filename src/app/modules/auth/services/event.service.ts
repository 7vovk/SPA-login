import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = 'http://localhost:3000/api/events';
  private _usersUrl = 'http://localhost:3000/api/profile';

  constructor(private http: HttpClient) {
  }

  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }
  getAllUsers() {
    return this.http.get<any>(this._usersUrl);
  }
}
