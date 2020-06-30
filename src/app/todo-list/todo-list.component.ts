import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

class TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('toDoItem') toDoInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  public name: string = '';
  public items: Array<TodoItem> = [];
  public remainingToDoItems: number = 0;

  public getRemainingCount() {
    return this.items.filter(item => !item.isDone).length;
  }

  public add(toDoItem: string) {

    if (toDoItem != '') {
      let newToDoItem = new TodoItem()

      newToDoItem.isDone = false;
      newToDoItem.name = toDoItem;

      this.items.push(newToDoItem);
      this.remainingToDoItems = this.getRemainingCount();
      this.toDoInput.nativeElement.value = '';
    }  
      
  }

  public toggleItem(item: TodoItem) {

    item.isDone = !item.isDone;
    this.remainingToDoItems = this.getRemainingCount(); 
  }

}
