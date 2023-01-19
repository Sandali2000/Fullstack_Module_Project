import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AddService} from "../service/add.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
 books!:any;
addBook:any
  id:any

  constructor(private activatedRout:ActivatedRoute,

              private  router:Router,
              private addService:AddService,
              private fb:FormBuilder,private Url:ActivatedRoute,) {
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


    activatedRout.params.subscribe((params)=>{
      if(params['id'])
        this.books= addService.singleBook(params['id']);
    })

  }

  ngOnInit(): void {
    this.id =this.Url.snapshot.params['id'];
    console.log(this.id);
    this.addService.singleBook(this.id).subscribe(data=>{
      this.addBook.patchValue(data);
    })

  }
}
