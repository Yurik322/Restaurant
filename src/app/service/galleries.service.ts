import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {config} from '../info/config';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class GalleriesService {

  constructor(private http: HttpClient) { }

  getGalleries(): Observable<any>{
    return this.http.get(`${config.HOST}/galleries`);
  }

  getByGalleriesId(id: number): Observable<any>{
    return this.http.get(`${config.HOST}/galleries/${id}`);
  }
}
