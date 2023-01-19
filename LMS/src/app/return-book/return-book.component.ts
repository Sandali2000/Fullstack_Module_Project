import { Component, OnInit } from '@angular/core';
import {ReceivedBookService} from "../service/receivedBook.service";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {DialogService} from "../service/dialog.service";

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss']
})
export class ReturnBookComponent implements OnInit {
  sideBarOpen = true;
  searchText: any
  books:any

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private resBookService:ReceivedBookService, private rout: ActivatedRoute,
              private routes: Router,private dialogService:DialogService) { }
  totalLength: any;
  page: number = 1;
  length: any;
  ngOnInit(): void {

    this.rout.params.subscribe(params => {
      if (params['searchText'])
        this.searchText = params['searchText'];
    })

    this.loadStudent()
    this.resBookService.listAllResBook().subscribe((result) => {
      this.books = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.books)

    })
  }
  loadStudent() {
    this.resBookService.listAllResBook().subscribe((data: any) => {
      //console.log(data);
      this.books = data;
    })
  }

  delete(datas:any){
    this.dialogService.openConfirmDialog('Are you sure transfer this book to Return Book Table?')
      .afterClosed().subscribe(res=>{
        if(res){
          this.resBookService.deleteDate(datas._id).subscribe(data=>{
            console.log(data);
            this.books=this.books.filter((u:any)=>u!==datas)

          })
        }

    })

  }

}
