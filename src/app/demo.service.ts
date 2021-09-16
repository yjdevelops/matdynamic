import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  url ="https://jsonplaceholder.typicode.com/users";

 getData() {
  return this.http.get(this.url);
}

  constructor(private http: HttpClient) { }
}
