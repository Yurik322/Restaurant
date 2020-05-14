import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  visibility: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // switch visibility of container
  toggle(){
    this.visibility=!this.visibility;
  }
}
