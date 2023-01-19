import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {Book} from "../models/book";
import {ActivatedRoute,Router} from "@angular/router";
import {AddService} from "../service/add.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books:any;
  sideBarOpen=true;
  searchText:any;


  constructor(private  fs:BookService , private route:ActivatedRoute,
              private addService:AddService) { }
  totalLength:any;
  page:number =1;
  ngOnInit(): void {


    this.loadStudent()
    this.addService.listBook().subscribe((result)=>{
      this.books=result;

      // @ts-ignore
      this.totalLength =result.length;
      console.log(this.books)
    })
  }
  loadStudent(){
    this.addService.listBook().subscribe((data:any)=>{
      //console.log(data);
      this.books =data;

    })
  }


}
