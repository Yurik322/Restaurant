import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppetizersService} from "../../service/appetizers.service";

@Component({
  selector: 'app-singleitem',
  templateUrl: './singleitem.component.html',
  styleUrls: ['./singleitem.component.sass']
})
export class SingleitemComponent implements OnInit {

  singleItem;

  constructor(private activateRout: ActivatedRoute, private Single: AppetizersService) { }

  ngOnInit(): void {

    this.activateRout.params.subscribe(params => {
      console.log(params);
      this.Single.getById(params.id).subscribe(singleItem => {
        this.singleItem = singleItem;
      });
    });
  }

}
