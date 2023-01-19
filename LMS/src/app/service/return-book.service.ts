import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReturnBookService {

  constructor(private http: HttpClient) { }

  addReturnData(books: any) {
    return this.http.post('http://localhost:8080/returnBook/add-retbook', books);
  }
  listReturnBook(){
    return this.http.get('http://localhost:8080/returnBook/');
  }
}
