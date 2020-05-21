import { Component, OnInit } from '@angular/core';
import {MaindishesService} from '../../service/maindishes.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-maindishes',
  templateUrl: './maindishes.component.html',
  styleUrls: ['./maindishes.component.sass']
})
export class MaindishesComponent implements OnInit {

  constructor(private maindishes: MaindishesService,
              private  route: Router) { }

  Maindishes: any[];

  ngOnInit(): void {
    this.maindishes.getMaindishes().subscribe(data => {
      this.Maindishes = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`maindishes/${id}`])
  }

}
