import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';


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

  constructor(private api:ApiService) { }

  ngOnInit() {}

  onLoginClick() {
    this.loginError = false;
    if (this.email.value != "" && this.password.value != "") {
      this.warningText = "";
      console.log(this.email.value)
      console.log(this.password.value);
      this.api.login(this.email.value,this.password.value).subscribe(data=>
        {
          console.log(data);
        });
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
      this.loginError=true;
      this.warningText="Password reset link sent to your email";
      console.log("Password reset email sent");
    }
  }

}
