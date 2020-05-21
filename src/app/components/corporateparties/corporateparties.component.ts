import { Component, OnInit } from '@angular/core';
import {CorporatepartiesService} from '../../service/corporateparties.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-corporateparties',
  templateUrl: './corporateparties.component.html',
  styleUrls: ['./corporateparties.component.sass']
})
export class CorporatepartiesComponent implements OnInit {

  constructor(private corporateparties: CorporatepartiesService,
              private  route: Router) { }

  Corporateparties: any[];

  ngOnInit(): void {
    this.corporateparties.getCorporateparties().subscribe(data => {
      this.Corporateparties = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`corporateparties/${id}`])
  }

}
