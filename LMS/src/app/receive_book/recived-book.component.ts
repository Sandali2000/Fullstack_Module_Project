import { Component, OnInit } from '@angular/core';
import {ReceivedBookService} from "../service/receivedBook.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {FormGroup,Validators} from "@angular/forms";
import {DialogService} from "../service/dialog.service";
import {AddService} from "../service/add.service";
import {startWith,map} from "rxjs";


@Component({
  selector: 'app-receive_book',
  templateUrl: './recived-book.component.html',
  styleUrls: ['./recived-book.component.scss']
})
export class RecivedBookComponent implements OnInit {
  searchText: any
  sideBarOpen = true;
  books:any
  formGroup!:FormGroup;
  id:any;
  addStudent:any;
  bookList = ["Received-Book","Return-Book"]

  options:String[]=['The Circus Train','The Americas ',
  'Into the Magic Shop','The Kite Runner','Pride and Prejudice','The Outsiders','Charlotte’s Web','Jane Eyre','Falling in love','Do You Love Me',
    'पंचतंत्र','Rising of the Elements ','The detective Kids','Theory of Atom','Smart Reading Glasses','Spiritual awakening'
  ]
  options1:String[]=['jone#11',
    'Jeram66','James12','Velma123','Kibo99','Paul','Jane Eyre','Decker','Gillian123',
    'Boone2000','krish66'
  ]
  options2:String[]=['jone@gmail.com',
    'Jeram@gmail.com','James@gmail.com','Velma@gmail.com','Kibo@gmail.com','Paul@gmail.com','Jane@gmail.com','Zenaida@gmail.com'
    ,'Gillian@gmail.com',
    'Boone@gmail.com','krish@gmail.com'
  ]
  options3:String[]=['Charles C. Mann ','Amita Parikh ',
    'Dr James Doty','Khaled Hosseinir','ane Austen','S.E. Hinton','E.B. White','Charlotte Bronte','MITTAL RAVAL','Pavan Naidu',
    'Rajveer Kotadiya','THE LEGEND ','mazfar shaikh','Jenice Turner','Shamad Ansari','Subbu'
  ]


  auto:any
  auto1:any


  myControl=new FormControl
  filteredOption:any;
  private _filter(value:string){
    const filterValue=value.toLowerCase();
    return this.options.filter(option=>option.toLowerCase().includes(filterValue))
  }

  myControl1=new FormControl
  filteredOption1:any;
  private _filter1(value:string){
    const filterValue1=value.toLowerCase();
    return this.options1.filter(option1=>option1.toLowerCase().includes(filterValue1))
  }

  myControl2=new FormControl
  filteredOption2:any;
  private _filter2(value:string){
    const filterValue2=value.toLowerCase();
    return this.options2.filter(option2=>option2.toLowerCase().includes(filterValue2))
  }

  authorName=new FormControl
  filteredOption3:any;
  private _filter3(value:string){
    const filterValue3=value.toLowerCase();
    return this.options3.filter(option3=>option3.toLowerCase().includes(filterValue3))
  }

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private resBookService: ReceivedBookService,
              private Url: ActivatedRoute,
              private  formBuild:FormBuilder,
              private routes: Router,
              private dialogService:DialogService,
              private addService:AddService) {

  }

  ngOnInit(): void {
    this.formGroup=this.formBuild.group({
      selection:['Received-Book',Validators.required],
      userName:['',Validators.required],
      email:['',Validators.required],
      bookName:['',Validators.required],
      authorName:['',Validators.required],
      resDate:['',Validators.required],
      retDate:['',Validators.required],
      comment:['',Validators.required]

    })

    this.filteredOption=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )

    this.filteredOption1=this.myControl1.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value))
    )

    this.filteredOption2=this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value))
    )

    this.filteredOption3=this.authorName.valueChanges.pipe(
      startWith(''),
      map(value => this._filter3(value))
    )
  }

  addData(){
    if(this.formGroup.valid){

      this.dialogService.openConfirmDialog('Are you sure received this book?')
        .afterClosed().subscribe(res=>{

          if(res){
            console.log(this.formGroup.value);
            this.resBookService.addData(this.formGroup.value).subscribe((data: any) => {
              console.log(data)
              this.routes.navigate(['/returnBook'])
            })
          }
      })

    }else{console.log(this.date)
      this.dialogService.openConfirmDialog('Error Message, You Check Again')
        .afterClosed().subscribe(res=>{
        if(res){
          this.routes.navigate(['/re-book'])
        }
      }
      ) }

  }
  clear(){
    console.log(this.formGroup.value);
    this.formGroup.reset();
  }


}
