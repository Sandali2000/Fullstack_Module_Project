import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {ReturnBookService} from "../service/return-book.service";

@Component({
  selector: 'app-return-book-list',
  templateUrl: './return-book-list.component.html',
  styleUrls: ['./return-book-list.component.scss']
})
export class ReturnBookListComponent implements OnInit {

  sideBarOpen = true;
  searchText: any
  books:any
  totalLength: any;
  page: number = 1;
  length: any;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private resBookService:ReturnBookService, private rout: ActivatedRoute,
              private routes: Router) { }

  ngOnInit(): void {

    this.rout.params.subscribe(params => {
      if (params['searchText'])
        this.searchText = params['searchText'];
    })
    this.loadBooks()
    this.resBookService.listReturnBook().subscribe((result) => {
      this.books = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.books)

    })


  }
  loadBooks() {
    this.resBookService.listReturnBook().subscribe((data: any) => {
      //console.log(data);
      this.books = data;
    })
  }

}
