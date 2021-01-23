import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {
    this.todo = new Todo();
  }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      'bg-danger': !this.todo.completed,
      'bg-success': this.todo.completed
    }
    return classes;
  }

  onToggle(todo: Todo) {
    console.log('toggle');
  }

  onDelete(todo: Todo) {
    console.log('delete');
  }

}
