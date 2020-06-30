import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../services/nasa-api.service';
import { observable } from 'rxjs';


@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.css']
})
export class NasaApodComponent implements OnInit {
  public apod: any;
  constructor(private nasaApi: NasaApiService) { }

  ngOnInit(): void {
    this.nasaApi.getAPOD()
      .subscribe(data => {
        this.apod = data;
        console.log(data);
     })
  }

}
