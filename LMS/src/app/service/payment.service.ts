import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  addPayment(student: any) {
    return this.http.post('http://localhost:8080/pay/add-payment', student);
  }

  listStudent() {
    return this.http.get('http://localhost:8080/pay/');
  }
}
