import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppetizersService} from "../../service/appetizers.service";

@Component({
  selector: 'app-single-appetizer',
  templateUrl: './single-appetizer.component.html',
  styleUrls: ['./single-appetizer.component.sass']
})
export class SingleAppetizerComponent implements OnInit {

  singleItem;

  constructor(private activateRout: ActivatedRoute, private SingleAppetizer: AppetizersService) { }

  ngOnInit(): void {

    this.activateRout.params.subscribe(params => {

      this.SingleAppetizer.getByAppetizersId(params.id).subscribe(singleItem => {
        this.singleItem = singleItem;
      });
    });
  }
}
