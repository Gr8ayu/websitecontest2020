import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl();
  password = new FormControl();
  loginError: boolean = false;
  warningText: string = "";

  constructor() { }

  ngOnInit() {}

  onLoginClick() {
    this.loginError = false;
    if (this.email.value != "" && this.password.value != "") {
      this.warningText = "";
      console.log(this.email.value)
      console.log(this.password.value);
    }
    else {
      this.warningText = "Please enter a valid Email and Password combination";
      this.loginError = true;
    }
  }

  onForgotPasswordClick()
  {
    this.loginError=false;
    if (this.email.value == "") {
      this.warningText = "Please enter a valid email";
      this.loginError=true;
    }
    else
    {
      console.log("Password reset email sent");
    }
  }

}
