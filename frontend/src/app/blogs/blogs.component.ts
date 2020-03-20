import { Component, OnInit } from '@angular/core';
import {BlogPost} from '../blogpost.model';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  postArray:BlogPost[]=[];

  constructor(public api:ApiService) { }

  ngOnInit() {
    this.api.getProducts().subscribe(data=>{
      data.forEach(element=>
        {
          let blogpost:any={};
          blogpost.creationDate=element.fields.creationDate;
          blogpost.content=element.fields.content;
          blogpost.title=element.fields.title;
          blogpost.type=element.fields.type;
          blogpost.published=element.fields.publish;
          this.postArray.push(blogpost);
        })
    });
    console.log(this.postArray);
  }

}
