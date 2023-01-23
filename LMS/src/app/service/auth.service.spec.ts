import {TestBed} from "@angular/core/testing";
import {AuthService} from "./auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('Login Service',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AuthService]
    })
  });
  it('service created',()=>{

  })
})
