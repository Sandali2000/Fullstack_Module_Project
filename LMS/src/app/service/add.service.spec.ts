
import {TestBed} from "@angular/core/testing";
import {AddService} from "./add.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BOOK Service',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AddService]
    })
  });
  it('service created',()=>{

  })
})
