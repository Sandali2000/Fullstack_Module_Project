import { Component, OnInit } from '@angular/core';
import {ReceivedBookService} from "../service/receivedBook.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {FormGroup,Validators} from "@angular/forms";
import {ReturnBookComponent} from "../return-book/return-book.component";
import {ReturnBookService} from "../service/return-book.service";
import {DialogService} from "../service/dialog.service";

@Component({
  selector: 'app-edit-ret-book',
  templateUrl: './edit-ret-book.component.html',
  styleUrls: ['./edit-ret-book.component.scss']
})
export class EditRetBookComponent implements OnInit {
  searchText: any
  sideBarOpen = true;
  books:any
  formGroup!:FormGroup;
  id:any;
  addStudent:any;
  bookList = ["Received-Book","Return-Book"]

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private resBookService: ReceivedBookService,
              private retBookService:ReturnBookService,
              private Url: ActivatedRoute,
              private  formBuild:FormBuilder,
              private dialogService:DialogService,
              private routes: Router) { }

  ngOnInit(): void {
    this.formGroup=this.formBuild.group({
      selection:['',Validators.required],
      userName:['',Validators.required],
      email:['',Validators.required],
      bookName:['',Validators.required],
      authorName:['',Validators.required],
      resDate:['',Validators.required],
      retDate:['',Validators.required],
      comment:['',Validators.required]

    });
    this.id =this.Url.snapshot.params['id'];
    console.log(this.id);
    this.resBookService.singleResBook(this.id).subscribe(data=>{
      this.formGroup.patchValue(data);
    })

  }

  returnBook(){
    if(this.formGroup.valid){

      this.dialogService.openConfirmDialog('Book return successfully').
        afterClosed().subscribe(res=>{
          if(res){
            console.log(this.formGroup.value);
            this.retBookService.addReturnData(this.formGroup.value).subscribe((data: any) => {

              this.routes.navigate(['/returnBookList'])

            })
          }else {
            this.dialogService.openConfirmDialog('Error Message, Check again ').afterClosed()
              .subscribe(res=>{
                if(res){
                  this.routes.navigate(['/editReturnBook:id'])
                }
              })

          }
      })

    }
  }


}
