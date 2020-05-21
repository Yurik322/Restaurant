import { Component, OnInit } from '@angular/core';
import {WeddingsService} from '../../service/weddings.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.sass']
})
export class WeddingsComponent implements OnInit {

  constructor(private weddings: WeddingsService,
              private  route: Router) { }

  Weddings: any[];

  ngOnInit(): void {
    this.weddings.getWeddings().subscribe(data => {
      this.Weddings = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`weddings/${id}`])
  }

}
