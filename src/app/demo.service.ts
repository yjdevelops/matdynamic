import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  url ="https://jsonplaceholder.typicode.com/users";
  url2="http://localhost:3000/routes";

 getData() {
  return this.http.get(this.url);
}

getItems(){
  return this.http.get(this.url2);
}

getForm(){
  return this.http.get(this.url2);
}

  constructor(private http: HttpClient) { }  
}
