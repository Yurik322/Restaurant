import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DrinksService {

  constructor(private http: HttpClient) { }

  getDrinks(): Observable<any>{
    return this.http.get(`${config.HOST}/drinks`);
  }

  getById(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/drinks/${id}`);
  }
}
