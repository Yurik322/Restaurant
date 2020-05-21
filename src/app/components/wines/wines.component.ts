import { Component, OnInit } from '@angular/core';
import {WinesService} from '../../service/wines.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.sass']
})
export class WinesComponent implements OnInit {

  constructor(private wines: WinesService,
              private  route: Router) { }

  Wines: any[];

  ngOnInit(): void {
    this.wines.getWines().subscribe(data => {
      this.Wines = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`wines/${id}`])
  }
}
