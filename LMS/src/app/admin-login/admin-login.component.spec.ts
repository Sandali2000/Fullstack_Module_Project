import {TestBed} from "@angular/core/testing";
import {AdminLoginComponent} from "./admin-login.component";

import {RouterTestingModule} from "@angular/router/testing";



describe('Admin Login Page',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[AdminLoginComponent]
    })
  });
  it('service created',()=>{

  })
})

