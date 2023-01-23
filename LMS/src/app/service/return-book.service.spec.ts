import {TestBed} from "@angular/core/testing";
import {ReturnBookService} from "./return-book.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ReturnBook Service',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ReturnBookService]
    })
  });
  it('service created',()=>{

  })
})
