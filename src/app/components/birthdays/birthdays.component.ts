import { Component, OnInit } from '@angular/core';
import {BirthdaysService} from '../../service/birthdays.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.sass']
})
export class BirthdaysComponent implements OnInit {

  constructor(private birthdays: BirthdaysService,
              private  route: Router) { }

  Birthdays: any[];

  ngOnInit(): void {
    this.birthdays.getBirthdays().subscribe(data => {
      this.Birthdays = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`birthdays/${id}`])
  }
}
