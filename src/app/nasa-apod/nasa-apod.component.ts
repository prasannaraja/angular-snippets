import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../services/nasa-api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { INasaAPOD } from '../models/nasaAPOD';

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.css']
})
export class NasaApodComponent implements OnInit {
  public apod: INasaAPOD;
  public safeUrl: any;
  constructor(private nasaApi: NasaApiService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.nasaApi.getAPOD()
      .subscribe(data => {
        this.apod = data
        console.log(data);
      })  
  }

  getSafeUrl(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);    
  }
  
}
