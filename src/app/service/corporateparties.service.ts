import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CorporatepartiesService {

  constructor(private http: HttpClient) { }

  getCorporateparties(): Observable<any>{
    return this.http.get(`${config.HOST}/corporateparties`);
  }

  getById(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/corporateparties/${id}`);
  }
}
