import {TestBed} from "@angular/core/testing";
import {EditRetBookComponent} from "./edit-ret-book.component";

import {RouterTestingModule} from "@angular/router/testing";



describe('Return Book Page',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[EditRetBookComponent]
    })
  });
  it('service created',()=>{

  })
})



