import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

export interface Book{
  _id:string,
  name:string
}
@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) {
  }

  searchBooks(query:string){
   return  this.http.post<{payload:Array<Book>}>('http://localhost:8080/endpoint/getBook',{payload:query},{
      headers:new  HttpHeaders({'content-Type':'application/json'})
    }).pipe(
      map(data=>data.payload)
    );
  }


  addBook(book: any) {
    return this.http.post('http://localhost:8080/endpoint/add-book', book);
  }

  listBook() {
    return this.http.get('http://localhost:8080/endpoint/');
  }
  CountBook() {
    return this.http.get('http://localhost:8080/endpoint/count-book/');
  }

  deleteBook(id: any) {
    return this.http.delete('http://localhost:8080/endpoint/del-book/' + id);
  }

  singleBook(id: any) {
    return this.http.get('http://localhost:8080/endpoint/book/' + id);
  }

  updateBook(id: any, book: any) {

    return this.http.put('http://localhost:8080/endpoint/update-book/' + id, book);
  }

  patchValue(data: Object) {

  }
}
