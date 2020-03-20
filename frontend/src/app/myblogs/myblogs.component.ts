import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BlogPost } from '../blogpost.model';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  constructor(private api: ApiService) { }
  currentPost: BlogPost;
  ngOnInit() {
    this.currentPost = this.api.currentBlogpost;
  }

}
