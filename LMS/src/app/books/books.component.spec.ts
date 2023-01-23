import {TestBed} from "@angular/core/testing";
import {BooksComponent} from "./books.component";

import {RouterTestingModule} from "@angular/router/testing";



describe('Book Page',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[BooksComponent]
    })
  });
  it('service created',()=>{

  })
})


