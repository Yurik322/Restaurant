import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GalleriesService} from "../../service/galleries.service";

@Component({
  selector: 'app-single-galleries',
  templateUrl: './single-galleries.component.html',
  styleUrls: ['./single-galleries.component.sass']
})
export class SingleGalleriesComponent implements OnInit {

  singleItem;

  constructor(private activateRout: ActivatedRoute, private SingleGallery: GalleriesService) { }

  ngOnInit(): void {

    this.activateRout.params.subscribe(params => {

      this.SingleGallery.getByGalleriesId(params.id).subscribe(singleItem => {
        this.singleItem = singleItem;
      });
    });
  }
}
