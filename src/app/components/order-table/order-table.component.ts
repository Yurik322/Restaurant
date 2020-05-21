import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReservationsService} from '../../service/reservations.service';


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.sass']
})
export class OrderTableComponent implements OnInit {

  diss=false;

  record = {
    name: '',
    phone: '',
    date: '',
    time: '',
    quality:  0

  };
  constructor(private activateRout: ActivatedRoute, private Reservation: ReservationsService,
              private SingleRecord: ReservationsService) { }

  ngOnInit(): void {
  }

  success() {
    this.diss = true;
    console.log(this.record);

    this.SingleRecord.postReservationsOrder(this.record).subscribe();
  }

  getId(i: number) {
    // this.record.sp = this.sp.types[i].type;
  }

}
