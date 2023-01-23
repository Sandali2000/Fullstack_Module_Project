import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";

import {FormBuilder,FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  alert:boolean=false
  username:any;
  password:any;
  user:any
  constructor(private authService:AuthService,
              private router:Router,
              private fb:FormBuilder,
              private routes:Router) {
    this.user=fb.group({
      'username' : new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'studentId': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required,]),
    })
  }

  ngOnInit(): void {

  }

    onLoginSubmit(){
    const user = {
      username: this.username,
      password:this.password
    }


      this.authService.login(user).subscribe((data: any) => {
        console.log(data)
        if (data.success){

          this.router.navigate(['/Index']);
        }else{
         this.alert=true
        }


      })
    }
  closeAlert(){
    this.alert=false
  }


  register(){
    console.log(this.user.value);
    this.authService.register(this.user.value).subscribe((data=>{
      console.log(data);
      alert("succsess")
    }))
  }
}
