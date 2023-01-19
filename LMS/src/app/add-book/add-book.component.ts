import { Component, OnInit } from '@angular/core';
import {AddService} from "../service/add.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Validators, FormBuilder} from "@angular/forms";
import {DialogService} from "../service/dialog.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  addBook:any;
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(
    private  fb:FormBuilder,
    private routes:Router,
    private addService:AddService,
    private dialogService:DialogService
  ) {
    this.addBook = fb.group(
      {
        name:['',Validators.required],
        authorName:['',Validators.required],
        language:['',Validators.required],
        page:['',Validators.required],
        count:['',Validators.required],
        date:['',Validators.required],
        price:['',Validators.required],
        contents:['',Validators.required],
        tags:['',Validators.required],
        imageUrl:['',Validators.required],
        description:['',Validators.required],



      }
    )

  }

  ngOnInit(): void {
  }

  onClear(){
    console.log(this.addBook.value);
    this.addBook.reset();
  }

  onSubmit() {

    if(this.addBook.valid){
      this.dialogService.openConfirmDialog('Are you sure to add this book?')
      .afterClosed().subscribe(res=>{
        if(res){
          console.log(this.addBook.value);
          this.addService.addBook(this.addBook.value).subscribe((data: any) => {

            this.routes.navigate(['/listBook']);
          })
        }
      })

    }else{
      this.dialogService.openConfirmDialog('Error Message, You Check Again')
        .afterClosed().subscribe(res=>{
          if(res){
            this.routes.navigate(['/addBook']);
          }
      })
    }






  }
  get name() {
    return this.addBook.get('name');
  }
  get authorName() {
    return this.addBook.get('authorName');
  }
  get page() {
    return this.addBook.get('page');
  }
  get count() {
    return this.addBook.get('count');
  }
  get date() {
    return this.addBook.get('date');
  }
  get price() {
    return this.addBook.get('price');
  }
  get language() {
    return this.addBook.get('language');
  }
  get contents() {
    return this.addBook.get('contents');
  }
  get tags() {
    return this.addBook.get('tags');
  }

}
