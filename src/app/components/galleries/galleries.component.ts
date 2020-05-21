import { Component, OnInit } from '@angular/core';
import {GalleriesService} from '../../service/galleries.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.sass']
})
export class GalleriesComponent implements OnInit {

  constructor(private galleries: GalleriesService,
              private  route: Router) { }

  Galleries: any[];

  ngOnInit(): void {
    this.galleries.getGalleries().subscribe(data => {
      this.Galleries = data;
    });
  }

  getId(id: any) {
    this.route.navigate([`galleries/${id}`])
  }

}
