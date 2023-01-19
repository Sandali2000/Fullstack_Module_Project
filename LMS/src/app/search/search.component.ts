import { Component, OnInit } from '@angular/core';

import {FormControl} from "@angular/forms";

import {startWith,map} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  options:String[]=['one','two','tree']
  auto:any

  myControl=new FormControl
  filteredOption:any;
  private _filter(value:string){
    const filterValue=value.toLowerCase();
    return this.options.filter(option=>option.toLowerCase().includes(filterValue))
  }

  constructor(  ) { }

  ngOnInit(): void {


    this.filteredOption=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }


}
