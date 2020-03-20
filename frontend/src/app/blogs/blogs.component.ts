import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blogpost.model';
import { ApiService } from '../api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  postArray: BlogPost[] = [];
  announcements = 0;
  notice = 0;
  somethingelse = 0;
  postNo = 0;
  constructor(public api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getPosts().subscribe(data => {
      data.forEach(element => {
        let blogpost: any = {};
        blogpost.creationDate = element.fields.creationDate;
        blogpost.content = element.fields.content;
        blogpost.title = element.fields.title;
        blogpost.type = element.fields.type;
        blogpost.published = element.fields.publish;
        blogpost.postNumber = this.postNo;
        this.postNo += 1;
        this.postArray.push(blogpost);
        if (blogpost.type == "Announce") this.announcements += 1;
        if (blogpost.type == "Notice") this.notice += 1;

      })
    });

    this.somethingelse = this.postArray.length - (this.announcements + this.notice);
    console.log(this.postArray);
  }

  loadPost(event) {
    this.api.currentBlogpost = this.postArray[event];
    console.log(this.api.currentBlogpost);
    this.router.navigate(['myblog']);
  }
}
