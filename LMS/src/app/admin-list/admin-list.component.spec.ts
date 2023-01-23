import {TestBed} from "@angular/core/testing";
import {AdminListComponent} from "./admin-list.component";

import {RouterTestingModule} from "@angular/router/testing";



describe('Add Book Page',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[AdminListComponent]
    })
  });
  it('service created',()=>{

  })
})


