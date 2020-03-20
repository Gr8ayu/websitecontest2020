import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  scroll(el) {
    console.log(el);
    if (el == "home") {
      this.router.navigate(['/']);
    }

  }
}
