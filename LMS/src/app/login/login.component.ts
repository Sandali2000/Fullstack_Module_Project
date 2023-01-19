import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl} from "@angular/forms";
import {Router,ActivatedRoute} from "@angular/router";
import {AdminService} from "../service/admin.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:any
  password:any
  add:any
  alert:boolean=false
  constructor(
              private router: Router,
              private authService:AdminService,

  ) {
  }

  ngOnInit(): void {
  }
  onLoginSubmit(){

    console.log(this.username);
    console.log(this.password)
    const user = {
      username: this.username,
      password:this.password
    }

    this.authService.login(user).subscribe((data: any) => {
      console.log(data)

      if (data.success){
        this.router.navigate(['/dashboard']);
      }else {
        this.alert=true
      }


    })
  }

  closeAlert(){
    this.alert=false
  }

}


