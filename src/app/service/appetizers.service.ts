import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AppetizersService {

  constructor(private http: HttpClient) { }

  getAppetizers(): Observable<any>{
    return this.http.get(`${config.HOST}/appetizers`);
  }

  getByAppetizersId(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/appetizers/${id}`);
  }
}
