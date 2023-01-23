import {TestBed} from "@angular/core/testing";
import {ListStudentComponent} from "./list-student.component";

import {RouterTestingModule} from "@angular/router/testing";



describe('Student List Page',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[ListStudentComponent]
    })
  });
  it('service created',()=>{

  })
})



