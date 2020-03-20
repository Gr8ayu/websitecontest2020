import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BlogPost} from './blogpost.model'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  url:string="http://127.0.0.1:8000/api";
  urlAddPost:string="/addpost/";
  urlGetPost:string="/posts"

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
   });
 options = { headers: this.headers };
  addBlogPost(title:string,content:string,type:string):any
  {
    if(type==""||type==null)
      type="Notice";
    var postData={title:title,content:content,type:type};
    console.log(postData);
    return this.http.post(this.url+this.urlAddPost,postData,this.options);
  }
  getProducts():Observable<any>
  {
    return this.http.get(this.url+this.urlGetPost);
  }
}
