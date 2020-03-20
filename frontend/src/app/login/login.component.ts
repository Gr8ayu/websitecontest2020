import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';


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
  authState: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() { }

  onLoginClick() {
<<<<<<< HEAD
    if(this.auth.getAuthenticated()=="false")
    {
    console.log(this.auth.getAuthenticated());
    this.loginError = false;
    if (this.email.value != "" && this.password.value != "") {
      this.warningText = "";
      console.log(this.email.value)
      console.log(this.password.value);
      this.auth.login(this.email.value,this.password.value).subscribe(
        (response) => 
        {
            this.loginError=false;
            this.warningText="";
            this.auth.setAuthenticated("true");
            this.router.navigate(['/'])
        },
        (error) => 
        {
         this.loginError=true;
         this.auth.setAuthenticated("false");
         this.warningText="Please check your credentials again";
        }
      )
=======
    if (!this.auth.getAuthenticated()) {
      console.log(this.auth.getAuthenticated());
      this.loginError = false;
      if (this.email.value != "" && this.password.value != "") {
        this.warningText = "";
        console.log(this.email.value)
        console.log(this.password.value);
        this.auth.login(this.email.value, this.password.value).subscribe(
          (response) => {
            console.log(response);
            this.loginError = false;
            this.warningText = "";
            this.auth.setAuthenticated(true);
            this.router.navigate(['/'])
          },
          (error) => {
            this.loginError = true;
            this.warningText = "Please check your credentials again";
          }
        )
      }
      else {
        this.warningText = "Please enter a valid Username and Password combination";
        this.loginError = true;
      }
>>>>>>> aa1e61ecd830149a4783cc9f224b42e4434e1982
    }
    else {
      console.log("Nuh uh");
    }
  }
<<<<<<< HEAD
  else
  {
    console.log("Logging you out");
    this.auth.logout();
  }
}
=======
>>>>>>> aa1e61ecd830149a4783cc9f224b42e4434e1982


}
