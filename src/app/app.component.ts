import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {Blogs} from './blogs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent implements OnInit{
  title = 'Blog Project';
  blogs: Blogs[] = [];
  constructor(public restApi: ApiService) { }
  ngOnInit(): void {
    this.getBlogs();
  }
  // Get blogs list
  getBlogs(): void {
    this.restApi.getBlogs().subscribe((resp: any) => {
      this.blogs = resp;
      });
  }


}
