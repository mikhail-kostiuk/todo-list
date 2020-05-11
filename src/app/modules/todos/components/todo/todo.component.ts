import { Component, OnInit, Input } from '@angular/core';
import Todo from '../../interfaces/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  isEditTodoOpen: boolean;

  constructor(private todoService: TodoService) {
    this.isEditTodoOpen = false;
  }

  ngOnInit(): void {}

  toggleCheckbox(): void {
    if (this.todo.checked) {
      this.todoService.uncheckTodo(this.todo.id);
    } else {
      this.todoService.checkTodo(this.todo.id);
    }
  }

  toggleEditTodoForm(): void {
    this.isEditTodoOpen = !this.isEditTodoOpen;
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo.id);
  }
}
