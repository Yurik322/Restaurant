import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DesertsService {

  constructor(private http: HttpClient) { }

  getDeserts(): Observable<any>{
    return this.http.get(`${config.HOST}/deserts`);
  }

  getById(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/deserts/${id}`);
  }
}
