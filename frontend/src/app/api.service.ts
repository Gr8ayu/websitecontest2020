import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  url:string="http://127.0.0.1:8000/api";
  urlAddPost:string="/addpost/";
  urlGetPost:string="/posts/";
  urlLogin:string="/login/"

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
   });
 options = { headers: this.headers };
  addBlogPost(title:string,content:string,type:string):any
  {
    if(type==""||type==null)
      type="Notice";
    var formData: any = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("type",type);
    console.log(formData);
    return this.http.post(this.url+this.urlAddPost,formData);
  }
  getPosts():Observable<any>
  {
    return this.http.get(this.url+this.urlGetPost);
  }
}
