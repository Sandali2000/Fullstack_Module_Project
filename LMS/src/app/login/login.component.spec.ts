import {TestBed} from "@angular/core/testing";
import {LoginComponent} from "./login.component";
import {RouterTestingModule} from "@angular/router/testing";



describe('users Page',()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers:[LoginComponent]
    })
  });
  it('service created',()=>{

  })
})



