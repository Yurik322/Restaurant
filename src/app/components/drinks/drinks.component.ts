import { Component, OnInit } from '@angular/core';
import {DrinksService} from '../../service/drinks.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.sass']
})
export class DrinksComponent implements OnInit {

  constructor(private drinks: DrinksService,
              private  route: Router) { }

  Drinks: any[];
  term: string;

  model=-1;

  ngOnInit(): void {
    this.drinks.getDrinks().subscribe(data => {
      this.Drinks = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`drinks/${id}`])
  }

  get data(){
    return this.model;
  }
}
