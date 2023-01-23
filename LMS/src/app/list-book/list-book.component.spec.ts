import {TestBed} from "@angular/core/testing";
import {ListBookComponent} from "./list-book.component";

import {RouterTestingModule} from "@angular/router/testing";



describe('Book List Page',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[ListBookComponent]
    })
  });
  it('service created',()=>{

  })
})



