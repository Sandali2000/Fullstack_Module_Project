
import {TestBed} from "@angular/core/testing";
import {PaymentService} from "./payment.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('Payment Service',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PaymentService]
    })
  });
  it('service created',()=>{

  })
})
