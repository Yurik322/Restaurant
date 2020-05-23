import { Component, OnInit } from '@angular/core';
import {AppetizersService} from '../../service/appetizers.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.sass']
})
export class AppetizersComponent implements OnInit {

  constructor(private appetizers: AppetizersService,
              private  route: Router) { }

  Appetizers: any[];
  term: string;

  model=-1;

  ngOnInit(): void {
    this.appetizers.getAppetizers().subscribe(data => {
      this.Appetizers = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`appetizers/${id}`])
  }

  get data(){
    return this.model;
  }
}
