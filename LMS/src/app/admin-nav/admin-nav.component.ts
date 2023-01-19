import { Component, OnInit } from '@angular/core';
import {AdminService} from "../service/admin.service";
import {Router} from "@angular/router";
import {DialogService} from "../service/dialog.service";

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {

  constructor(private adminService:AdminService,
              private router:Router,
              private dialog:DialogService) { }

  ngOnInit(): void {
  }
  onLogout(){

    this.dialog.openConfirmDialog('You are logged out')
      .afterClosed().subscribe(res=>{
        if(res){
          this.adminService.logout()
          this.router.navigate(['/Index'])
        }
    })

}

}
