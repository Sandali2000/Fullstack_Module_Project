import { Component, OnInit } from '@angular/core';
import {AddService} from "../service/add.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService} from "../service/dialog.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {


  books:any;
  sideBarOpen=true;
  searchText:any;


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private addService:AddService,
              private routes:Router,
              private  rout:ActivatedRoute,
              private dialogService:DialogService) { }
  totalLength:any;
  page:number =1;
  ngOnInit(): void {
    this.rout.params.subscribe(params=>{
      if(params['searchText'])
        this.searchText=params['searchText'];
    })
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

  delStudent(datas:any){
    this.dialogService.openConfirmDialog('Are you sure to delete this recode?')
      .afterClosed().subscribe(res=>{
        if(res){
          this.addService.deleteBook(datas._id).subscribe(data=>{
            console.log(data);
            this.books=this.books.filter((u:any)=>u!==datas)
          })
        }
    })


  }
}

