import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() childEvent = new EventEmitter();
  ngOnInit() {
  }

  scroll(el) {

    this.childEvent.emit(el);
    //el.scrollIntoView();
  }


}
