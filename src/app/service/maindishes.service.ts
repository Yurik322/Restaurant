import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MaindishesService {

  constructor(private http: HttpClient) { }

  getMaindishes(): Observable<any>{
    return this.http.get(`${config.HOST}/maindishes`);
  }

  getById(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/maindishes/${id}`);
  }
}
