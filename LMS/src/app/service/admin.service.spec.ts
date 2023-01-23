
import {TestBed} from "@angular/core/testing";
import {AdminService} from "./admin.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('Admin Service',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AdminService]
    })
  });
  it('service created',()=>{

  })
})
