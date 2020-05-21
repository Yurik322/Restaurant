import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class WinesService {

  constructor(private http: HttpClient) { }

  getWines(): Observable<any>{
    return this.http.get(`${config.HOST}/wines`);
  }

  getByWinesId(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/wines/${id}`);
  }
}
