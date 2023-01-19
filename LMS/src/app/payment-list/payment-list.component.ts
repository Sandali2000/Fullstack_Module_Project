import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../service/payment.service";
import {ReturnBookService} from "../service/return-book.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  sideBarOpen = true;
  searchText: any
  money:any
  totalLength: any;
  page: number = 1;
  length: any;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private paymentService:PaymentService, private rout: ActivatedRoute,
              private routes: Router) { }

  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      if (params['searchText'])
        this.searchText = params['searchText'];
    })
    this.loadPayment()
    this.paymentService.listStudent().subscribe((result) => {
      this.money = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.money)

    })
  }
  loadPayment() {
    this.paymentService.listStudent().subscribe((data: any) => {
      //console.log(data);
      this.money = data;
    })
  }

}
