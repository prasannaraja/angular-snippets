import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SaveToJsonComponent } from './save-to-json/save-to-json.component';
import { NasaApodComponent } from './nasa-apod/nasa-apod.component';
import { SafePipe } from './custom-pipe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PopupComponent,
    TodoListComponent,
    SaveToJsonComponent,
    NasaApodComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
