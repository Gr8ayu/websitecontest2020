import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from '../api.service'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  public Editor = ClassicEditor;
  @ViewChild("myEditor") myEditor: any;
  data: string;
  content: string;
  title: string;
  type: string;
  blogTitle = new FormControl();

  config = {
    placeholder: "Start typing here"
  };

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() { }

  onBlogSubmit() {
    console.log(this.blogTitle.value)
    this.data = this.myEditor.editorInstance.getData();
    this.api.addBlogPost(this.blogTitle.value, this.data, "Notice").subscribe(data => {
      console.log(data);
      this.router.navigate(['blogs']);
    }, error => {
      alert(error);
    });
  }

}
