import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i = 1;
  temp = 0;
  emojis: any = [
    '', '❤️', '🎈', '🎃', '👓', '💋', '📣', '🖥', '💡'
  ]


  constructor() { }

  darktheme() {
    console.log("You want dark?");
  }
  ngOnInit() {
    setInterval(() => {
      this.temp = this.i;
      this.i = 0;
      setTimeout(() => {
        this.i = this.temp;
        if (this.i == 6) this.i = 1; else {
          this.i += 1;
        }
      }, 200);

    }, 2000);
  }
  scroll(el) {
    const element = document.getElementById(el)
    console.log(element)
    element.scrollIntoView();
  }

}
