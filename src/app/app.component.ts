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
  stats =['deactivated','draft','published','draft'];


  constructor(public restApi: ApiService) {



   }

  ngOnInit(): void {

    this.getBlogs();

  }
  // Get blogs list
  getBlogs(): void {
    this.restApi.getBlogs().subscribe((resp: any) => {
      this.blogs = resp;
      });
  }



filterBlogs(filterValue: any) {
  if(filterValue === "0"){
    this.restApi.getBlogs().subscribe((resp: any) => {
      this.blogs = resp;
    });
  }else {
  this.restApi.getBlogs().subscribe((resp: any) => {
    this.blogs = resp;
    this.blogs = resp.filter(t=>t.status ===filterValue);
    });
  }

  }
}





