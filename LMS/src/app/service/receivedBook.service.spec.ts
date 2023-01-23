
import {TestBed} from "@angular/core/testing";
import {ReceivedBookService} from "./receivedBook.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('Received Service',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ReceivedBookService]
    })
  });
  it('service created',()=>{

  })
})
