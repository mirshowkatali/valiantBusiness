import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Blogs} from './blogs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'https://my-json-server.typicode.com/orzel-bielik/test/posts';
  constructor(private httpClient: HttpClient) {

  }

public getBlogs(){
    return this.httpClient.get<Blogs[]>(`${this.apiURL}`);
}
}
