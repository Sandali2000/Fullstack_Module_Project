import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AddService} from "../service/add.service";


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  addBook:any;
  sideBarOpen = true;
  id:any;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


  constructor(private  fb:FormBuilder,
              private routes:Router,
              private addService:AddService,
              private Url:ActivatedRoute) {
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
    this.id =this.Url.snapshot.params['id'];
    console.log(this.id);
    this.addService.singleBook(this.id).subscribe(data=>{
      this.addBook.patchValue(data);
    })
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
