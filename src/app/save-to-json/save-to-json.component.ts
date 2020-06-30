import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { IEmployee } from '../models/employee';


@Component({
  selector: 'app-save-to-json',
  templateUrl: './save-to-json.component.html',
  styleUrls: ['./save-to-json.component.css']
})

export class SaveToJsonComponent implements OnInit {

  public employees = [];

  constructor(private apiService: BackendApiService) { }

  page = 1; pageSize = 4;
  collectionSize = this.employees.length;

  ngOnInit(): void {
    this.apiService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
