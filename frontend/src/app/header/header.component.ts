import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() childEvent = new EventEmitter();
  loggedOut: boolean = true;

  constructor(private auth: AuthService, private router: Router) {
    this.auth.stateChangedEmitter().subscribe(value => {
      console.log(value + " is authstate");
      if (value) {
        this.loggedOut = false;
      }
    })
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  ngOnInit() { }

  scroll(el) {
    this.childEvent.emit(el);
  }


}
