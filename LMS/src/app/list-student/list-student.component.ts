import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {DialogService} from "../service/dialog.service";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  students: any;
  sideBarOpen = true;
  searchText: any


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private studentService: StudentService, private rout: ActivatedRoute,
              private routes: Router,
              private dialogService:DialogService) {
  }

  totalLength: any;
  page: number = 1;

  length: any;

  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      if (params['searchText'])
        this.searchText = params['searchText'];
    })

    this.loadStudent()
    this.studentService.listStudent().subscribe((result) => {
      this.students = result;

      // @ts-ignore
      this.totalLength = result.length;
      console.log(this.students)

    })

  }
  loadStudent(){

    this.studentService.listStudent().subscribe((data:any)=>{
      //console.log(data);
      this.students =data;
    })
  }

  delStudent(datas:any){
    this.dialogService.openConfirmDialog('Are you sure to delete this recode?')
      .afterClosed().subscribe(res=>{
        console.log(res)
      if(res){
        this.studentService.deleteStudent(datas._id).subscribe(data=>{
           console.log(data);
              this.students=this.students.filter((u:any)=>u!==datas)

            })

        }
    })



  }

}
