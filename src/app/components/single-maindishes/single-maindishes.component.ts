import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MaindishesService} from "../../service/maindishes.service";

@Component({
  selector: 'app-single-maindishes',
  templateUrl: './single-maindishes.component.html',
  styleUrls: ['./single-maindishes.component.sass']
})
export class SingleMaindishesComponent implements OnInit {

  singleItem;

  constructor(private activateRout: ActivatedRoute, private SingleMaindishes: MaindishesService) { }

  ngOnInit(): void {

    this.activateRout.params.subscribe(params => {

      this.SingleMaindishes.getByMaindishesId(params.id).subscribe(singleItem => {
        this.singleItem = singleItem;
      });
    });
  }
}
