import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {AdminService} from "../service/admin.service";
import {AddService} from "../service/add.service";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
students:any;
books:any;
admins:any;

  constructor(private studentService: StudentService, private adminService:AdminService
  , private  addService:AddService) { }

  ngOnInit(): void {

    this.countStudent()
    this.studentService.countStudent().subscribe((result) => {
      this.students = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.students)

    })

    this.countAdmin()
    this.adminService.count().subscribe((result) => {
      this.admins = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.admins)

    })

    this.countBook()
    this.adminService.count().subscribe((result) => {
      this.books = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.books)

    })
  }

  countStudent(){
    this.studentService.countStudent().subscribe((data:any)=>{
      //console.log(data);
      this.students =data;
    })
  }

  countAdmin(){
    this.adminService.count().subscribe((data:any)=>{
      //console.log(data);
      this.admins =data;
    })
  }

  countBook(){
    this.addService.CountBook().subscribe((data:any)=>{
      //console.log(data);
      this.books =data;
    })
  }

}
