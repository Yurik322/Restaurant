import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BirthdaysService {

  constructor(private http: HttpClient) { }

  getBirthdays(): Observable<any>{
    return this.http.get(`${config.HOST}/birthdays`);
  }

  getById(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/birthdays/${id}`);
  }
}
