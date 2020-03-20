import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './blogpost.model'
import { url } from 'src/url.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  currentBlogpost: BlogPost;

  constructor(private http: HttpClient) { }

  urlAddPost: string = "/addpost/";
  urlGetPost: string = "/posts/";
  urlLogin: string = "/login/"

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  });
  options = { headers: this.headers };
  addBlogPost(title: string, content: string, type: string): any {
    if (type == "" || type == null)
      type = "Notice";
    var formData: any = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("type", type);
    console.log(formData);
    return this.http.post(url + this.urlAddPost, formData);
  }
  getPosts(): Observable<any> {
    return this.http.get(url + this.urlGetPost);
  }
}
