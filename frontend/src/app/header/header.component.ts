import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedOut:boolean=true;

  constructor(private auth:AuthService) {
    this.auth.stateChangedEmitter().subscribe(value=>
      {
        console.log(value+" is authstate");
        if(value)
        {
          this.loggedOut=false;    
        }    
      })
   }
  ngOnInit() {}

}
