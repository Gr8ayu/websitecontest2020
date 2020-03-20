import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState:string="Login";

  constructor(private auth:AuthService) { }
  @Output() childEvent = new EventEmitter();
  ngOnInit() {
    if(this.auth.getAuthenticated())
      this.authState="Logout";
  }

}
