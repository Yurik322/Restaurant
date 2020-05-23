import { Component, OnInit } from '@angular/core';
import {DesertsService} from '../../service/deserts.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-deserts',
  templateUrl: './deserts.component.html',
  styleUrls: ['./deserts.component.sass']
})
export class DesertsComponent implements OnInit {

  constructor(private deserts: DesertsService,
              private  route: Router) { }

  Deserts: any[];
  term: string;

  model=-1;
  ngOnInit(): void {
    this.deserts.getDeserts().subscribe(data => {
      this.Deserts = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`deserts/${id}`])
  }

  get data(){
    return this.model;
  }
}
