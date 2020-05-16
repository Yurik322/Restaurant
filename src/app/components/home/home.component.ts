import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../../service/testservice.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  allPlanets: any;

  constructor(private testServer:TestserviceService) {

  }

  ngOnInit(): void {
    this.testServer.getSomeData().subscribe(allplanets => {
      console.log(allplanets);
      this.allPlanets=allplanets
    })
  }

}
