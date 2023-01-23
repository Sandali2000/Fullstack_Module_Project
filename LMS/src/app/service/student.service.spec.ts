
import {TestBed} from "@angular/core/testing";
import {StudentService} from "./student.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('Login Service',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[StudentService]
    })
  });
  it('service created',()=>{

  })
})
