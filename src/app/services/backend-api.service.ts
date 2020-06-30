import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {IEmployee} from "../models/employee";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private _url:string ="/assets/data.json";
  
  constructor(private httpService: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.httpService.get<IEmployee[]>(this._url);
  }
}
