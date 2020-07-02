import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INasaAPOD } from '../models/nasaAPOD';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private _key = "qbheULfiTVwkiyJVLIkd8hTcAjIOooUlB51QPDN8";
  private _nasa_apod_url: string = "https://api.nasa.gov/planetary/apod?api_key=" + this._key;
  
  constructor(private httpService: HttpClient) { }

  getAPOD(): Observable<INasaAPOD> {
    return this.httpService.get<INasaAPOD>(this._nasa_apod_url);
  }
}
