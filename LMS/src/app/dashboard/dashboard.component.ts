import { Component, OnInit ,OnChanges} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AddService,Book} from "../service/add.service";
import {Chart} from "chart.js";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sideBarOpen = true;
  student:any;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private postsService: AddService, private  studentService:StudentService) {
  }

  ngOnInit(): void {

    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Education', 'Navel', 'Children', 'Other', 'History', 'Religions'],
        datasets: [{
          label: 'Book_Type',
          data: [12, 19, 3, 5, 12, 3],
          backgroundColor:"#236e7e",
          borderColor: "#092d2f",
          pointHoverBackgroundColor:"#99b3c7",
          barThickness:40,
          borderWidth: 1
        },
          ]
      },

    });

  }


}
