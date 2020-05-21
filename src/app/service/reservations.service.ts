import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../info/config';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  postReservationsOrder(record): Observable<any>{
    return this.http.post(`${config.HOST}/reservations`, record);
  }
}
