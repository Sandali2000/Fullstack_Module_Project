import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {StudentService} from "../service/student.service";
import {FormControl} from "@angular/forms";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addStudent:any;


  constructor(
    private  fb:FormBuilder,
    private routes:Router,
    private studentService:StudentService,
  ) {
    this.addStudent = fb.group(
      {
        'name' : new FormControl(null, Validators.required),
        'email' : new FormControl(null, [Validators.required, Validators.email]),
        'password' : new FormControl(null, [Validators.required, Validators.minLength(6)]),
        'contactNo' : new FormControl(
          null,
          [
            Validators.required,
            Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
          ]),
        'fullName' : new FormControl(null, Validators.required),
        'address' : new FormControl(null, Validators.required),
        'image' : new FormControl('', Validators.required),

      });




  }

  ngOnInit(): void {

  }
  onClear(){
    console.log(this.addStudent.value);
    this.addStudent.reset();
  }



  onSubmit() {
    if(this.addStudent.valid){
      console.log(this.addStudent.value);
      this.studentService.addStudent(this.addStudent.value).subscribe((data: any) => {
        console.log(data);
        alert('Now You pay Registration Fees')
        this.routes.navigate(['/payment']);
      })
    }else
    {
      alert('ERROR MESSAGE, Checked Again!!')
    }

  }





}

