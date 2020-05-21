import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DesertsService} from "../../service/deserts.service";

@Component({
  selector: 'app-single-deserts',
  templateUrl: './single-deserts.component.html',
  styleUrls: ['./single-deserts.component.sass']
})
export class SingleDesertsComponent implements OnInit {

  singleItem;

  constructor(private activateRout: ActivatedRoute, private SingleDeserts: DesertsService) { }

  ngOnInit(): void {

    this.activateRout.params.subscribe(params => {

      this.SingleDeserts.getByDesertsId(params.id).subscribe(singleItem => {
        this.singleItem = singleItem;
      });
    });
  }
}
