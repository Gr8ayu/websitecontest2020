import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i = 0;

  emojis: any = [
    '❤️', '🎈', '🎃', '👓', '💋', '📣', '🖥', '💡'
  ]


  constructor() { }

  darktheme() {
    console.log("You want dark?");
  }
  ngOnInit() {
    setInterval(() => {

      if (this.i == 6) this.i = 0; else {
        this.i += 1;
      }
    }, 2000);
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
