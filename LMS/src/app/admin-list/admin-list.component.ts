import { Component, OnInit } from '@angular/core';
import {AdminService} from "../service/admin.service";
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
admins:any;
students:any;
  constructor( private  adminService:AdminService, private  studentService:StudentService) { }

  ngOnInit(): void {

    this.loadAdmin()
    this.adminService.listAdmin().subscribe((result) => {
      this.admins = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.admins)

    })
    this.countStudent()
    this.studentService.countStudent().subscribe((result) => {
      this.admins = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.students)

    })


  }

  loadAdmin(){
    this.adminService.listAdmin().subscribe((data:any)=>{
      //console.log(data);
      this.admins =data;
    })
  }

  countStudent(){
    this.studentService.countStudent().subscribe((data:any)=>{
      //console.log(data);
      this.students =data;
    })
  }
}
