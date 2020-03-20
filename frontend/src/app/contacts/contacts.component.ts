import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  message = new FormControl("");
  name = new FormControl("");
  email = new FormControl("");
  subject = new FormControl("");

  submitError:boolean=false;
  submitMessage:string="";

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  onMessageSubmit()
  {
    if(this.email.value!="" && this.name.value!="" && this.subject.value!="" && this.message.value!="")
    {
      this.submitError=false;
      this.submitMessage="";
      this.api.sendMessage(this.name.value,this.email.value,this.subject.value,this.message.value).subscribe(response=>{
        this.submitError=false;
        this.submitMessage="";
        console.log("Message Submitted");
      },error=>{})
      console.log("Message submitted");
    }
    else
    {
      this.submitError=true;
      this.submitMessage="Please enter all the above details before submitting";
      console.log("Message not submitted");
    }
  }

}
