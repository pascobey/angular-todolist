import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService: TodoService) {
    this.todo = new Todo();
  }

  ngOnInit(): void {
  }

  checkboxed() {
    if (this.todo.completed) {
      return 'checked'
    } else {
      return ''
    }
  }

  setClasses() {
    let classes = {
      'line-through': this.todo.completed
    }
    return classes;
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
