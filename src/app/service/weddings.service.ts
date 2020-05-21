import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class WeddingsService {

  constructor(private http: HttpClient) { }

  getWeddings(): Observable<any>{
    return this.http.get(`${config.HOST}/weddings`);
  }

  getById(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/weddings/${id}`);
  }
}
