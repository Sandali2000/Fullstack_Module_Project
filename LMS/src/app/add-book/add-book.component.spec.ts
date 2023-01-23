import {TestBed} from "@angular/core/testing";
import {AddBookComponent} from "./add-book.component";

import {RouterTestingModule} from "@angular/router/testing";



describe('Add Book Page',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[AddBookComponent]
    })
  });
  it('service created',()=>{

  })
})

