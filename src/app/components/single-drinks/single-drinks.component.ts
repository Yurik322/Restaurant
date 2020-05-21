import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DrinksService} from "../../service/drinks.service";

@Component({
  selector: 'app-single-drinks',
  templateUrl: './single-drinks.component.html',
  styleUrls: ['./single-drinks.component.sass']
})
export class SingleDrinksComponent implements OnInit {

  singleItem;

  constructor(private activateRout: ActivatedRoute, private SingleDrinks: DrinksService) { }

  ngOnInit(): void {

    this.activateRout.params.subscribe(params => {

      this.SingleDrinks.getByDrinksId(params.id).subscribe(singleItem => {
        this.singleItem = singleItem;
      });
    });
  }
}
