import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopupComponent } from './popup/popup.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SaveToJsonComponent } from './save-to-json/save-to-json.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'json', component: SaveToJsonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
