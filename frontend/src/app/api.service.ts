import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {BlogPost} from './blogpost.model'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  url:string="http://1f21d446.ngrok.io/api";
  urlAddPost:string="/addpost/";
  urlGetPost:string="/posts"

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
   });
 options = { headers: this.headers };
  addBlogPost(title:string,content:string,type:string):any
  {
    if(type==""||type==null)
      type="Notice";
    var postData="title:\'"+title+"\ncontent:"+content+"\ntype:"+type;
    console.log(postData);
    console.log(this.url);
    return this.http.post(this.url+this.urlAddPost,postData,this.options);
  }
  getProducts():Observable<any>
  {
    return this.http.get(this.url+this.urlGetPost);
  }
}
