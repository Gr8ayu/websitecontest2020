import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  public Editor = ClassicEditor;
  @ViewChild("myEditor") myEditor: any;
  data: string;
  public config = {
    placeholder: 'Start typing here'
  };

  constructor() { }

  ngOnInit() { }

  onBlogSubmit() {
    this.data = this.myEditor.editorInstance.getData();
    console.log(this.data);
  }

}
