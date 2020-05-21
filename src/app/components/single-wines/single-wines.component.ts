import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WinesService} from "../../service/wines.service";

@Component({
  selector: 'app-single-wines',
  templateUrl: './single-wines.component.html',
  styleUrls: ['./single-wines.component.sass']
})
export class SingleWinesComponent implements OnInit {

  singleItem;

  constructor(private activateRout: ActivatedRoute, private SingleWines: WinesService) { }
  ngOnInit(): void {

    this.activateRout.params.subscribe(params => {

      this.SingleWines.getByWinesId(params.id).subscribe(singleItem => {
        this.singleItem = singleItem;
      });
    });
  }
}
