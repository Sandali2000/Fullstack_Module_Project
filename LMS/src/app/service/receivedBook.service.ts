import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReceivedBookService {

  constructor(private http: HttpClient) {
  }
  addData(books: any) {
    return this.http.post('http://localhost:8080/receivedBook/add-resbook', books);
  }
  listAllResBook(){
    return this.http.get('http://localhost:8080/receivedBook/');
  }
  singleResBook(id:any){
    return this.http.get('http://localhost:8080/receivedBook/books/' + id);
  }

  deleteDate(id:any){
    return this.http.delete('http://localhost:8080/receivedBook/del-resbook/' +id);
  }

}
