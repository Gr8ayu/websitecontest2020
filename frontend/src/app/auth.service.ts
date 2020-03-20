import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { url } from 'src/url.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  urlLogin: string = "/login/"

  stateChanged: EventEmitter<boolean> = new EventEmitter();
  public authenticated: boolean = false;

  public login(username: string, password: string) {
    var formData: any = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    return this.http.post(url + this.urlLogin, formData);
  }

  public setAuthenticated(value: boolean) {
    this.authenticated = value;
    this.stateChanged.emit(this.authenticated);
  }

  getAuthenticated() {
    return this.authenticated;
  }

  logout() {
    this.authenticated = false;
    this.stateChanged.emit(this.authenticated);
  }
  stateChangedEmitter()
  {
    return this.stateChanged;
  }

  

}
