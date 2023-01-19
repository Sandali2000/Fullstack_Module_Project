import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../service/student.service";
import {DialogService} from "../service/dialog.service";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  addStudent:any;
  id:any;
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(
    private Url:ActivatedRoute,
    private  fb:FormBuilder,
    private routes:Router,
    private studentService:StudentService,
    private dialogService:DialogService
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
        'image' : new FormControl('../../assets/child3.webp', Validators.required)

      });




  }

  ngOnInit(): void {
    this.id =this.Url.snapshot.params['id'];
    console.log(this.id);
    this.studentService.singleStudent(this.id).subscribe(data=>{
      this.addStudent.patchValue(data);
    })

  }
  onClear(){
    console.log(this.addStudent.value);
    this.addStudent.reset();
  }


  onSubmit() {
    this.dialogService.openConfirmDialog('Are you sure update this recode?')
      .afterClosed().subscribe(res=>{
        if(res){
          console.log(this.addStudent.value);
          this.studentService.updateStudent(this.id,this.addStudent.value).subscribe((data: any) => {
            console.log(data);
            this.routes.navigate(['/listStudent']);
          })
        }
    })

  }




}
